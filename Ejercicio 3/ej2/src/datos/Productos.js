export const productos = [
{
id: 1,
nombre: 'Smartwatch Pro X',
vendedor: { nombre: 'ElectroHub', rating: 4.8 },
imagenes: [
'https://www.joyeriapato.com/25150-thickbox_default/smartwatch-polar-grit-x2-pro-black.jpg',
'https://www.joyeriapato.com/25156-thickbox_default/smartwatch-polar-grit-x2-pro-titan.jpg',
],
enStock: true,
precio: { moneda: '€', valor: 215.5, enOferta: true },
caracteristicas: ['GPS integrado', 'Monitor de ritmo cardíaco', 'Resistente al agua (5 ATM)']
},
{
id: 2,
nombre: 'Auriculares NoiseCancel 3000',
vendedor: { nombre: 'AudioWorld', rating: 4.5 },
imagenes: ['https://tse4.mm.bing.net/th/id/OIP.btakTXQ6yLftownSljCy9AHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'],
enStock: false,
precio: { moneda: '€', valor: 129.99, enOferta: false },
caracteristicas: ['Cancelación activa de ruido', '30h de batería', 'Bluetooth 5.2']
}
];


export default productos;