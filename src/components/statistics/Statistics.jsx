import PropTypes from 'prop-types';
import data from '../../data.json';
import css from './Statistics.module.css';
import { Stat } from './stat/Stat';

export const Statistics = ({title}) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {data.map(dataItem => {
          return (
            <Stat
              key={dataItem.id}
              label={dataItem.label}
              percentage={dataItem.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};

Stat.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
