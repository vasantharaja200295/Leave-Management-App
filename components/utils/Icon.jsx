import * as icons from 'lucide-react-native';

const Icon = ({ name, color, size, customClassName }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} className={customClassName} />;
};

export default Icon;