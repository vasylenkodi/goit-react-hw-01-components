import PropTypes from 'prop-types';
import data from '../../data.json';
import { Stat } from './stat/Stat';

export const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
              {data.map(dataItem => {
          return (<Stat
            key={dataItem.id}
            label={dataItem.label}
            percentage={dataItem.percentage}
          />);
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
