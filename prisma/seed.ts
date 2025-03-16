import { PrismaClient, StockMovementType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const warehouses = [
    { name: "SF8", address: "SF8" },
    { name: "SF10", address: "SF10" },
    { name: "SF9", address: "SF9" },
    { name: "SF7", address: "SF7" },
    { name: "E-E15", address: "E-E15" },
    { name: "T-D181", address: "T-D181" },
    { name: "T-D172", address: "T-D172" },
    { name: "T-A22", address: "T-A22" },
    { name: "I-N21", address: "I-N21" },
    { name: "INT-ALFOMBRAS", address: "INT-ALFOMBRAS" }
  ];

  const products = [
    { reference: "000001850", name: "CABECERO BOTONES TEJIDO TELA BEIGE 200 CM", description: "CABECERO BOTONES TEJIDO TELA BEIGE 200 CM", barcode: "0729927127002" },
    { reference: "000001873", name: "L792 HEADBOARD 200X7X74.5 OTE  SUNDAY 004", description: "L792 HEADBOARD 200X7X74.5 OTE  SUNDAY 004", barcode: "0729927127026" },
    { reference: "000001851", name: "CABECERO L792 BOTONES TEJIDO TELA GRIS  200CM", description: "CABECERO L792 BOTONES TEJIDO TELA GRIS  200CM", barcode: "0729927127019" },
    { reference: "000001874", name: "CABECERO L792 HEADBOARD 200X7X74.5 OTE  SUNDAY 031", description: "CABECERO L792 HEADBOARD 200X7X74.5 OTE  SUNDAY 031", barcode: "0729927127033" },
    { reference: "000001869", name: "CABECERO L793 LISO TEJIDO TELA GRIS OSCURO 150 CM", description: "CABECERO L793 LISO TEJIDO TELA GRIS OSCURO 150 CM", barcode: "0729927126968" },
    { reference: "000001849", name: "CABECERO L793 LISO TEJIDO TELA GRIS CLARO 150 CM", description: "CABECERO L793 LISO TEJIDO TELA GRIS CLARO 150 CM", barcode: "0729927126951" },
    { reference: "000001848", name: "CABECERO L793 LISO TEJIDO TELA BEIGE CLARO 150 CM", description: "CABECERO L793 LISO TEJIDO TELA BEIGE CLARO 150 CM", barcode: "0729927126944" },
    { reference: "000001870", name: "CABECERO L793 LISO TEJIDO TELA BEIGE CLARO 200 CM", description: "CABECERO L793 LISO TEJIDO TELA BEIGE CLARO 200 CM", barcode: "0729927126975" },
    { reference: "000001872", name: "CABECERO L793 TEJIDO TELA GRIS OSCURO 200 CM", description: "CABECERO L793 TEJIDO TELA GRIS OSCURO 200 CM", barcode: "0729927126999" },
    { reference: "000001871", name: "CABECERO L793 TEJIDO TELA GRIS CLARO 200 CM", description: "CABECERO L793 TEJIDO TELA GRIS CLARO 200 CM", barcode: "0729927126982" },
    { reference: "000001855", name: "SOFÁ LINA BEIGE OTE SUNDAY 234X101X78 CM", description: "SOFÁ LINA BEIGE OTE SUNDAY 234X101X78 CM", barcode: "0729927127071" },
    { reference: "000001690", name: "LÁMPARA DE TECHO MADERA FRESNO TINTADA NEGRA Ø100X250H GU10 6W", description: "LÁMPARA DE TECHO MADERA FRESNO TINTADA NEGRA Ø100X250H GU10 6W", barcode: "0718603065752" },
    { reference: "000001689", name: "LÁMPARA DE TECHO MADERA FRESNO Ø100X150H GU10 5W/6W", description: "LÁMPARA DE TECHO MADERA FRESNO Ø100X150H GU10 5W/6W", barcode: "0718603065745" },
    { reference: "000001691", name: "LÁMPARA DE TECHO MADERA FRESNO TINTADA NEGRA CILÍNDRICA Ø80X130H MM GU10 6W", description: "LÁMPARA DE TECHO MADERA FRESNO TINTADA NEGRA CILÍNDRICA Ø80X130H MM GU10 6W", barcode: "0718603065769" },
    { reference: "000001654", name: "PASTILLA ZIGBEE DIMMER 1 CANAL", description: "PASTILLA ZIGBEE DIMMER 1 CANAL", barcode: "0000000001581" },
    { reference: "0000436", name: "AD21 ARSTYL", description: "AD21 ARSTYL", barcode: "0000000000436" },
    { reference: "0001584", name: "AD23 ARSTYL", description: "AD23 ARSTYL", barcode: "0000000001511" },
    { reference: "10418", name: "ALBORNOZ RIZO AMERICANO BLANCO XL", description: "ALBORNOZ RIZO AMERICANO BLANCO XL", barcode: "10418" },
    { reference: "000001791", name: "ALFOMBRA DE VISCOSA NOVA GRIS CLARO 300X400 CM", description: "ALFOMBRA DE VISCOSA NOVA GRIS CLARO 300X400 CM", barcode: "4099983052980" },
    { reference: "000001788", name: "ALFOMBRA EVE CREMA/BEIGE 160X230 CM", description: "ALFOMBRA EVE CREMA/BEIGE 160X230 CM", barcode: "4053894943676" },
    { reference: "10132", name: "ALFOMBRA EVE LINEAS BEIGE 160X230 CM", description: "ALFOMBRA EVE LINEAS BEIGE 160X230 CM", barcode: "4053894975110" },
    { reference: "10133", name: "ALFOMBRA EVE LINEAS BEIGE 200X290 CM", description: "ALFOMBRA EVE LINEAS BEIGE 200X290 CM", barcode: "10133" }
  ];

  // Create warehouses
  for (const warehouse of warehouses) {
    await prisma.warehouse.create({
      data: warehouse
    });
  }

  // Create products
  for (const product of products) {
    await prisma.product.create({
      data: product
    });
  }

  // Update stock for each product based on CSV data
  const csvData = [
    { reference: "000001850", stock: 24, warehouse: "SF8", barcode: "0729927127002" },
    { reference: "000001873", stock: 25, warehouse: "SF10", barcode: "0729927127026" },
    { reference: "000001851", stock: 25, warehouse: "SF8", barcode: "0729927127019" },
    { reference: "000001874", stock: 25, warehouse: "SF9", barcode: "0729927127033" },
    { reference: "000001869", stock: 25, warehouse: "SF9", barcode: "0729927126968" },
    { reference: "000001849", stock: 25, warehouse: "SF10", barcode: "0729927126951" },
    { reference: "000001848", stock: 24, warehouse: "SF8", barcode: "0729927126944" },
    { reference: "000001870", stock: 25, warehouse: "SF9", barcode: "0729927126975" },
    { reference: "000001872", stock: 25, warehouse: "SF9", barcode: "0729927126999" },
    { reference: "000001871", stock: 25, warehouse: "SF9", barcode: "0729927126982" },
    { reference: "000001855", stock: 5, warehouse: "SF8", barcode: "0729927127071" },
    { reference: "000001690", stock: 35, warehouse: "SF7", barcode: "0718603065752" },
    { reference: "000001689", stock: 40, warehouse: "SF7", barcode: "0718603065745" },
    { reference: "000001691", stock: 40, warehouse: "SF7", barcode: "0718603065769" },
    { reference: "000001654", stock: 257, warehouse: "E-E15", barcode: "0000000001581" },
    { reference: "0000436", stock: 322, warehouse: "T-D181", barcode: "0000000000436" },
    { reference: "0001584", stock: 44, warehouse: "T-D172", barcode: "0000000001511" },
    { reference: "10418", stock: 100, warehouse: "T-A22", barcode: "10418" },
    { reference: "10418", stock: 29, warehouse: "I-N21", barcode: "10418" },
    { reference: "000001791", stock: 1, warehouse: "INT-ALFOMBRAS", barcode: "4099983052980" },
    { reference: "000001788", stock: 3, warehouse: "INT-ALFOMBRAS", barcode: "4053894943676" },
    { reference: "10132", stock: 3, warehouse: "INT-ALFOMBRAS", barcode: "4053894975110" },
    { reference: "10133", stock: 3, warehouse: "INT-ALFOMBRAS", barcode: "10133" }
  ];

  for (const item of csvData) {
    const product = await prisma.product.findUnique({
      where: { reference_barcode: { reference: item.reference, barcode: item.barcode } }
    });

    const warehouse = await prisma.warehouse.findUnique({
      where: { name: item.warehouse }
    });

    if (product && warehouse) {
      // Create stock with quantity 0
      const stock = await prisma.stock.create({
        data: {
          productId: product.id,
          warehouseId: warehouse.id,
          quantity: 0
        }
      });

      // Create stock movement of type IN with the assigned quantity
      await prisma.stockMovement.create({
        data: {
          stockId: stock.id,
          quantity: item.stock,
          type: StockMovementType.IN
        }
      });

      // Update stock quantity
      await prisma.stock.update({
        where: { id: stock.id },
        data: { quantity: item.stock }
      });
    }
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });