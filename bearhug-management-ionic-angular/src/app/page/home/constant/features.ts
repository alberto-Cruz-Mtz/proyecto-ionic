interface FeaturesProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const FEATURE_SECURITY: FeaturesProps = {
  id: 1,
  title: "Seguridad",
  description: "Utilizamos el más alto nivel de seguridad en línea, cifrando toda tu para garantizar que tus datos estén protegidos.",
  icon: "lock-closed-outline",
}

const FEATURE_ACCESS: FeaturesProps = {
  id: 2,
  title: "Acceso",
  description: "Desde tu computadora de escritorio hasta tu teléfono móvil, podrás acceder a tus archivos en cualquier momento y lugar.",
  icon: "earth-outline",
}

const FEATURE_FILE: FeaturesProps = {
  id: 3,
  title: "Sin pérdidas",
  description: "Nunca más perderás información importante debido a fallos locales. Nuestro servicio de almacenamiento en la nube te respalda.",
  icon: "folder-outline",
}

const FEATURE_SCALABLE: FeaturesProps = {
  id: 4,
  title: "Escalable",
  description: "No te preocupes por quedarte sin espacio. Amplía tu almacenamiento según tus necesidades sin comprar más discos duros físicos.",
  icon: "trending-up-outline",
}

export const FEATURES = [
  FEATURE_SECURITY,
  FEATURE_ACCESS,
  FEATURE_FILE,
  FEATURE_SCALABLE
]
