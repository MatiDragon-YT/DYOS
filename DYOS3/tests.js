const enums = 
`enum ImguiType
	pointer=1
	var=0               
end`


function convertEnumsToConstants(input) {
  const lines = input.split('\n');
  let output = '';
  let currentEnum = '';
  let lastValue = -1;

  for (let line of lines) {
    line = line.trim();
    if (line.startsWith('enum ')) {
      const enumName = line.slice(5).trim().toUpperCase();
      currentEnum = enumName;
      lastValue = -1;
      continue;
    }
    if (line === 'end') {
      if (currentEnum) {
        output += '\n';
      }
      currentEnum = '';
      continue;
    }
    if (!currentEnum || !line) continue;

    const match = line.match(/^([\w]+)(?:\s*=\s*(.+))?$/);
    if (!match) continue;

    const member = match[1].toUpperCase();
    let valueStr = match[2]?.trim();
    let value;
    let isNumber = false;

    if (valueStr) {
      if (valueStr.startsWith('"') && valueStr.endsWith('"')) {
        value = valueStr;
      } else {
        const num = parseInt(valueStr);
        if (!isNaN(num)) {
          value = num;
          isNumber = true;
        } else {
          continue; // Valor inválido
        }
      }
    } else {
      value = lastValue + 1;
      isNumber = true;
    }

    const constName = `${currentEnum}_${member}`;
    output += `__${constName} = ${value}\n`;

    if (isNumber) {
      lastValue = value;
    }
  }
  return output.trimEnd();
}

console.log(convertEnumsToConstants(enums))