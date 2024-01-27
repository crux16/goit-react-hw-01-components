import css from './FriendListItem.module.css'

export const FriendListItem = ({avatar,name,isOnline}) => {
  return (
    <li className={(isOnline)?css.enabled:css.disabled}>
    <span className={(isOnline)?css.active:css.inactive}></span>
    <img className={css.avatar} src={avatar} alt={name} width="48"/>
    <p className={css.name}>{name}</p>
  </li>
  )
}
