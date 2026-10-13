const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");
const pngToIco = require("png-to-ico");

async function main() {
  const outputDir = path.join(__dirname, "assets");
  fs.mkdirSync(outputDir, { recursive: true });
  const png = await sharp(path.join(__dirname, "www", "icon.svg"))
    .resize(256, 256, { fit: "contain", background: "#ffffff" })
    .png()
    .toBuffer();
  const ico = await pngToIco(png);
  fs.writeFileSync(path.join(outputDir, "checklist.ico"), ico);
  console.log("Ícone do Checklist da Chácara criado com sucesso.");
}
main().catch(error => {
  console.error("Falha ao gerar o ícone do Windows:", error);
  process.exit(1);
});
