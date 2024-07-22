export const usuariosItems = [
  {
    nombre: 'Carlos',
    ganancias: 1000,

    avatar: 'https://i.pravatar.cc/150?img=1',
    ciudad: 'Bogotá',
    monto: 50000,
    numberRacha: 0,
    isRacha: false,
  },
  {
    nombre: 'Marta',
    ganancias: 1000,
    avatar: 'https://i.pravatar.cc/150?img=2',
    ciudad: 'Medellín',
    monto: 50000,
    numberRacha: 0,
    isRacha: false,
  },
  {
    nombre: 'Andrés',
    ganancias: 1000,
    avatar: 'https://i.pravatar.cc/150?img=3',
    ciudad: 'Cali',
    monto: 40000,
    numberRacha: 0,
    isRacha: false,
  },
  {
    nombre: 'Laura',
    ganancias: 1000,
    avatar: 'https://i.pravatar.cc/150?img=4',
    ciudad: 'Barranquilla',
    monto: 30000,
    numberRacha: 0,
    isRacha: false,
  },
  {
    nombre: 'Juan',
    ganancias: 1000,
    ciudad: 'Cartagena',
    monto: 30000,
    numberRacha: 0,
    avatar: 'https://i.pravatar.cc/150?img=5',
    isRacha: false,
  },
  {
    nombre: 'Ana',
    ganancias: 1000,
    ciudad: 'Bucaramanga',
    monto: 20000,
    avatar: 'https://i.pravatar.cc/150?img=6',
    numberRacha: 0,
    isRacha: false,
  },
  {
    nombre: 'Luis',
    ganancias: 1000,
    avatar: 'https://i.pravatar.cc/150?img=6',
    ciudad: 'Pereira',
    monto: 20000,
    numberRacha: 0,
    isRacha: false,
  },
  {
    nombre: 'Sofía',
    ganancias: 1000,
    avatar: 'https://i.pravatar.cc/150?img=7',
    ciudad: 'Manizales',
    monto: 20000,
    numberRacha: 0,
    isRacha: false,
  },
  {
    nombre: 'Miguel',
    ganancias: 1000,
    ciudad: 'Santa Marta',
    monto: 20000,
    avatar: 'https://i.pravatar.cc/150?img=8',
    numberRacha: 0,
    isRacha: false,
  },
  {
    nombre: 'Camila',
    ganancias: 1000,
    ciudad: 'Ibagué',
    monto: 20000,
    avatar: 'https://i.pravatar.cc/150?img=9',
    numberRacha: 0,
    isRacha: false,
    isTitle: false
  },
];
export const fetchGananciasItems = (usuarios = usuariosItems) => {
  const gananciasRandom = usuarios.map((emp) => {
    const gananciaRandom = Math.floor(Math.random() * emp.monto);
    return {
      ...emp,
      ganancias: gananciaRandom + emp.ganancias,
    };
  });

  const ordenGanancias = gananciasRandom.sort(
    (a, b) => b.ganancias - a.ganancias
  );
  return ordenGanancias;
};
