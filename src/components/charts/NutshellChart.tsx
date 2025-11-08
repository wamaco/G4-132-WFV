import { ResponsiveContainer } from 'recharts';
import nutshellImage from './nutshell.jpg'; // make sure your image file is in the same folder

const NutshellChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <img
        src={nutshellImage}
        alt="Nutshell Chart"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </ResponsiveContainer>
  );
};

export default NutshellChart;
