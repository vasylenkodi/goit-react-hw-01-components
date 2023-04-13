import css from './Stat.module.css';

export const Stat = ({ label, percentage }) => {
  const bgcColorOfStat = {backgroundColor: getRandomHexColor()};
  return (
    <li className={css.item} style={bgcColorOfStat}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}