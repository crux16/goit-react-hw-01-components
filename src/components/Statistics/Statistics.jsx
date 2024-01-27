import css from "./Statistic.module.css"

export const Statistics = ({stats}) => {
  return (
    <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>

    <ul className={css.statslist}>
        {stats.map(stat=>{
            return (
                <li className={css.item} key={stat.id}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
                </li>
            )
        })}
    </ul>
    </section>
  )
}
