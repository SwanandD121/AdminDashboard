import { groupNumber } from '../../data';
import StatisticsChart from '../StatisticsChart/StatisticsChart';
import css from './Statistics.module.css';
import {BsArrowUpShort} from 'react-icons/bs'

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
        <span claasName={css.title}>Overview Statistics</span>

        <div className={`${css.cards} grey-container`}>
            <div>
                <div className={css.arrowIcon}>
                    <BsArrowUpShort/>
                </div>

                <div className={css.card}>
                    <span>Top Photos this Month</span>
                    <span>Office Comps</span>
                </div>
            </div>

            <div className={css.card}>
                <span>Items</span>
                <span>$ {groupNumber(80)}</span>
            </div>

            <div className={css.card}>
                <span>Profit</span>
                <span>$ {groupNumber(850000)}</span>
            </div>

            <div className={css.card}>
                <span>Daily Average</span>
                <span>$ {groupNumber(5287)}</span>
            </div>

            

        </div>

        <StatisticsChart/>

    </div>
  )
}

export default Statistics
