const sheetsDict = Object.freeze({
  default: "insert",
  red: "red",
  blue: "blue",
});

const stylesDir = 'styles'

const insertedStyleSheet = document.createElement("link");
insertedStyleSheet.rel = "stylesheet";
insertedStyleSheet.href = `/${stylesDir}/insert.css`;

document.body.append(insertedStyleSheet);

const controls = document.getElementById('controls');
const buttons = controls.getElementsByTagName('button');

for (const button of buttons) {
  button.addEventListener('click', (e) => {
    const stylesheetName = button.dataset.color;
    insertedStyleSheet.href = `/${stylesDir}/${sheetsDict[stylesheetName]}.css`
  });
}
