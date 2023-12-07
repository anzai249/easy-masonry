import YAML from 'yamljs';
const data = YAML.load('masonry.yml');

try {
  const objStr = JSON.stringify(data,null,"\t")
  // const obj = JSON.parse(objStr);
  console.log(objStr);
} catch (e) {
  console.error(e);
}