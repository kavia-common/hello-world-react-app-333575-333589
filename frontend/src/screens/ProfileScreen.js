import React from 'react';
import { useToast } from '../context/ToastContext';
import { profileMenuItems } from '../data/content';
import { AccountIcon, StarIcon, LockIcon, GlobeIcon, BellIcon, HelpIcon, SignOutIcon, EditIcon, ChevronRightIcon } from '../components/Icons';

/**
 * ProfileScreen - Displays user profile, stats, and settings menu.
 */

const ICON_MAP = { account: AccountIcon, star: StarIcon, lock: LockIcon, globe: GlobeIcon, bell: BellIcon, help: HelpIcon, signout: SignOutIcon };

const TOAST_MESSAGES = {
  'pm-account': 'Opening account settings…',
  'pm-subscription': 'Premium: Active subscription',
  'pm-parental': 'Opening parental controls…',
  'pm-language': 'Opening language settings…',
  'pm-notifications': 'Opening notification settings…',
  'pm-help': 'Help & Support opened…',
  'pm-signout': 'Signing out…',
};

// PUBLIC_INTERFACE
function ProfileScreen() {
  /** Renders the profile screen with avatar, stats, and settings menu. */
  const { showToast } = useToast();

  return (
    <div id="screen-profile" className="page profile-screen" role="main">
      <div className="profile-header">
        <div className="profile-avatar-large" aria-label="User avatar: James">
          J
          <button className="profile-edit-btn" onClick={() => showToast('Edit profile photo')} aria-label="Edit profile photo">
            <EditIcon size={12} />
          </button>
        </div>
        <div className="profile-name">James Walker</div>
        <div className="profile-email">james.walker@email.com</div>
        <div className="profile-stats">
          <div className="profile-stat"><div className="profile-stat__num">48</div><div className="profile-stat__label">Watched</div></div>
          <div className="profile-stat"><div className="profile-stat__num">6</div><div className="profile-stat__label">My List</div></div>
          <div className="profile-stat"><div className="profile-stat__num">3</div><div className="profile-stat__label">Downloads</div></div>
        </div>
      </div>
      <div className="profile-menu" role="list">
        {profileMenuItems.map((item) => {
          const IconComponent = ICON_MAP[item.iconType] || AccountIcon;
          return (
            <div
              key={item.id}
              className="profile-menu-item"
              onClick={() => showToast(TOAST_MESSAGES[item.id] || `Opening ${item.title}…`)}
              role="listitem"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') showToast(TOAST_MESSAGES[item.id] || `Opening ${item.title}…`); }}
              aria-label={item.title}
            >
              <div
                className="profile-menu-item__icon"
                aria-hidden="true"
                style={item.iconAccent ? { background: 'rgba(229,9,20,0.15)', color: 'var(--color-accent-primary)' }
                  : item.danger ? { background: 'rgba(229,9,20,0.1)', color: 'var(--color-accent-primary)' } : undefined}
              >
                <IconComponent size={20} />
              </div>
              <div className="profile-menu-item__text">
                <div className="profile-menu-item__title" style={item.danger ? { color: 'var(--color-accent-primary)' } : undefined}>
                  {item.title}
                </div>
                {item.sub && (
                  <div className="profile-menu-item__sub" style={item.subAccent ? { color: 'var(--color-accent-primary)' } : undefined}>
                    {item.sub}
                  </div>
                )}
              </div>
              {!item.danger && (
                <div className="profile-menu-item__arrow" aria-hidden="true">
                  <ChevronRightIcon size={16} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileScreen;
