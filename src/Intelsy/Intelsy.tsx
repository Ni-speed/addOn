import { NavLink } from 'react-router-dom'

import s from './Intelsy.module.scss'

export const Intelsy = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Intelsy</h1>
      <p className={s.description}>
        Пользовательская функция для Google Docks™ Бесплатное дополнение к Google Sheets™️ для
        связи с нами
      </p>
      <NavLink className={s.button} to={'#'}>
        Установить (Бесплатно)
      </NavLink>
      <NavLink className={s.button} to={'/privacy-policy'}>
        Privacy Policy
      </NavLink>
    </div>
  )
}
