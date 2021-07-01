const fs = require('fs');
const path = require('path');

const rootPath = path.resolve(__dirname, '..')
const rootFolders = fs.readdirSync(rootPath);
// console.log(path.resolve(__dirname, ''))

// 不需要处理的文件夹
const excludesFolders = ['ExportPdf'];

/**
 * 文件夹名称中不能有.
 * 根目录第一层不要放md文件
 * 目录中除了md文件不要放其他的
 * md文件中最高目录层级为 H3
 */
const targetFolders = rootFolders.filter(fold => !fold.includes('.') && !excludesFolders.includes(fold));

let content = '';
console.log(targetFolders)

function recurseGetContent(folders,superPath) {
  folders.forEach((folder) => {
    if (folder.includes('.md')) {
      // md文件
      content += `## ${folder.replace('.md', '')}\r\n`;
      content += fs.readFileSync(`${superPath}/${folder}`);
      content += '\r\n';
    } else {
      // 文件夹
      const subPath = `${superPath}/${folder}`;
      const subFolders = fs.readdirSync(subPath);
      // console.log(subFolders)
      recurseGetContent(subFolders, subPath);
    }
  })
}

function exportPdf(folders, superPath) {
  folders.forEach(folder => {
    const folderPath = path.resolve(__dirname, `${superPath}/${folder}`);
    // 除了根目录，其他可能是文件也可能是文件夹
    content += `# ${folder}\r\n`;
    const targets = fs.readdirSync(folderPath);
    recurseGetContent(targets, `${superPath}/${folder}`)
  })
}
exportPdf(targetFolders, '..');

// console.log(content)
fs.writeFileSync('YoloBlog.md', content)