import styles from './Settings.module.css'
import Sidebar from '../../components/sidebar/Sidebar';

export default function settings() {
    return (
        <div className={styles.settings}>
            <div className={styles.settingsWrapper}>
                <div className={styles.settingsTitle}>
                    <span className={styles.settingsTitleUpdate}>Update your account</span>
                    <span className={styles.settingsTitleDelete}>Delete account</span>
                </div>
                <form className={styles.settingsForm}>
                    <label>Profile Picture</label>
                    <div className={styles.settingsPP}>
                        <img 
                        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <label htmlFor="fileInput">
                            <i className={`${styles.settingsPPIcon} fas fa-user-circle`}></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Aramide" />
                    <label>Email</label>
                    <input type="email" placeholder="adetunji@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button type="submit" className={styles.settingsSubmitButton}>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
