import { useCallback, useMemo } from 'react'

import spainFlag from '@iconify/icons-emojione-v1/flag-for-spain'
import unitedStatesFlag from '@iconify/icons-emojione-v1/flag-for-united-states'
import { Icon } from '@iconify/react'
import { Menu, Dropdown, Input, Button } from 'antd'
import { NavLink } from 'react-router-dom'

import './AppHeader.scss'
import { useTranslation } from 'react-i18next'

const ICON_SIZE = '1.5em'

function AppHeader() {
  const { t, i18n } = useTranslation()

  const changeLanguage = useCallback(
    (lang) => () => {
      i18n.changeLanguage(lang)
    },
    [i18n]
  )

  const handleSearch = useCallback((value: string): void => {
    console.log('search: ', value)
  }, [])

  const currentLanguageIcon = useMemo(() => {
    switch (i18n.language) {
      case 'es':
        return spainFlag
      default:
        return unitedStatesFlag
    }
  }, [i18n.language])

  return (
    <div className="app-header">
      <div className="app-header__left">
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                <Button type="text">{t('page.home')}</Button>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/recipes">
                <Button type="text">{t('page.recipes')}</Button>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/user">
                <Button type="text">{t('page.user')}</Button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="app-header__center">
        <Input.Search
          placeholder={t('general.search')}
          onSearch={handleSearch}
          enterButton
        />
      </div>

      <div className="app-header__right">
        <Dropdown
          placement="bottomRight"
          overlay={
            <Menu>
              <Menu.Item
                onClick={changeLanguage('en')}
                icon={
                  <Icon
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    icon={unitedStatesFlag}
                  />
                }
              />
              <Menu.Item
                onClick={changeLanguage('es')}
                icon={
                  <Icon width={ICON_SIZE} height={ICON_SIZE} icon={spainFlag} />
                }
              />
            </Menu>
          }
        >
          <Button type="text">
            <Icon
              width={ICON_SIZE}
              height={ICON_SIZE}
              icon={currentLanguageIcon}
            />
          </Button>
        </Dropdown>
      </div>
    </div>
  )
}

export default AppHeader