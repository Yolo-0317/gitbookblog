const fs = require("fs");
const { exec } = require("child_process");

const expectFilesAndDirs = [
  "webpack",
  "node_modules",
  "getSummary.js",
  "book.json",
  "_book",
  "README.md",
  "SUMMARY.md",
];

const tocMap = new Map();
const toc = [];

function recursionGetToc(superPath, fileNames, tocArr) {
  // console.log(fileNames);
  // const toc1 = { dir: "", files: [] };
  const superDir = superPath.replace(`${__dirname}`, "").replace(/^\//, "");
  fileNames.forEach((fn) => {
    if (/\.html|\.pdf|\.js|\.DS_Store/.test(fn)) {
      // 过滤文件
      return;
    }
    if (fn.endsWith(".md")) {
      // md文件直接塞入目录
      if (Array.isArray(tocArr)) {
        // 塞入子节点
        tocArr.push({
          isParent: false,
          fileName: fn,
          superDir,
        });
      } else {
        toc.push({
          isParent: false,
          fileName: fn,
          superDir,
        });
      }
    } else {
      const path = `${superPath}/${fn}`;
      const childFiles = fs.readdirSync(path);
      const children = []; // 当前文件夹的内容
      if (Array.isArray(childFiles)) {
        let superDirObj = null;
        if (superDir !== "" && !superDir.includes("/")) {
          // 说明是根路由下的第一级文件夹，寻找其根路由的父文件夹
          superDirObj = toc.find((item) => item.fileName === superDir);
        }
        if (superDir.includes("/")) {
          // 说明层级较深，找到其最近的父文件夹
          const superDirFileName = superDir.split("/").slice(-2).shift();
          superDirObj = toc.find((item) => item.fileName === superDirFileName);
        }
        let superChildren = superDirObj ? superDirObj.children : null; // 当前文件夹的兄弟内容
        if (Array.isArray(superChildren)) {
          superChildren.push({
            isParent: true,
            fileName: fn,
            superDir,
            children,
          });
        } else {
          toc.push({
            isParent: true,
            fileName: fn,
            superDir,
            children,
          });
        }
        recursionGetToc(path, childFiles, children);
      }
    }
  });
  // return toc;
}

const files = fs.readdirSync(`${__dirname}`, (err, files) => {
  if (err) throw err;
  if (firstRun && !files.length) console.log(`${dir}: 文件夹为空`.redBG);
  return files;
});

const targetFiles = files.filter(
  (file) => !file.startsWith(".") && !expectFilesAndDirs.includes(file)
);
recursionGetToc(__dirname, targetFiles);
// console.log(JSON.stringify(toc));

exec("pbcopy").stdin.end(JSON.stringify(toc));

// 得到toc后编写SUMMARY.md

// 首先清空 SUMMARY.md
fs.writeFile("./SUMMARY.md", "", () => {
  console.log("SUMMARY.md已清空");
});

function recursionWriteToc(tocArr, tab = 0) {
  tocArr.forEach((item) => {
    if (Array.isArray(item.children)) {
      fs.writeFileSync(
        "./SUMMARY.md",
        `${Array(tab)
          .map((t) => " ")
          .join("")}*${item.fileName}\n`,
        {
          flag: "a",
        }
      );
      recursionWriteToc(item.children, (tab += 2));
    } else {
      fs.writeFileSync(
        "./SUMMARY.md",
        `${Array(tab + 2)
          .map((t) => " ")
          .join(" ")}*${item.fileName}\n`,
        {
          flag: "a",
        }
      );
    }
  });
}

recursionWriteToc(toc);
