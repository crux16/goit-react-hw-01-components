import css from "./Profile.module.css"

export const Profile = ({
    username,
    avatar,
    location,
    tag,
    stats,
    }) => {
    

  return (
    <div className={css.profile}>
    <div className={css.description}>
        <img
        src={avatar}
        alt={username}
        className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
    </div>
    <ul className={css.stats}>
        <li>
        <span className={css.label}>Followers</span>
        <p className={css.quantity}>{stats.followers}</p>
        </li>
        <li>
        <span className={css.label}>Views</span>
        <p className={css.quantity}>{stats.views}</p>
        </li>
        <li>
        <span className={css.label}>Likes</span>
        <p className={css.quantity}>{stats.likes}</p>
        </li>
    </ul>
    </div>
  )
}

