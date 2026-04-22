import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartPie, faEye, faFolderOpen, faUsers, faChartLine, 
  faCommentDots, faPlug, faMagnifyingGlass, faCircleQuestion,
  faArrowUp, faChevronLeft, faChevronRight, faBell
} from '@fortawesome/free-solid-svg-icons';
import styles from './Dashboard.module.css';

// Dữ liệu bảng từ thiết kế
const customersData = [
  { name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'New' },
  { name: 'Carlos Garcia', company: 'SmoozeShift', value: '$747', date: '24/07/2023', status: 'New' },
  { name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In-progress' },
  { name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress' },
  { name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/05/2023', status: 'Completed' },
  { name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/06/2023', status: 'Completed' },
];

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}><img src="/visily-image-1858.webp" alt="" /></div>
        
        <nav className={styles.navMenu}>
          <a href="#" className={`${styles.navItem} ${styles.active}`}>
            <FontAwesomeIcon icon={faChartPie} className={styles.navIcon} /> Dashboard
          </a>
          <a href="#" className={styles.navItem}>
            <FontAwesomeIcon icon={faEye} className={styles.navIcon} /> Overview
          </a>
          <a href="#" className={styles.navItem}>
            <FontAwesomeIcon icon={faFolderOpen} className={styles.navIcon} /> Projects
          </a>
          <a href="#" className={styles.navItem}>
            <FontAwesomeIcon icon={faUsers} className={styles.navIcon} /> Teams
          </a>
          <a href="#" className={styles.navItem}>
            <FontAwesomeIcon icon={faChartLine} className={styles.navIcon} /> Analytics
          </a>
          <a href="#" className={styles.navItem}>
            <FontAwesomeIcon icon={faCommentDots} className={styles.navIcon} /> Messages
          </a>
          <a href="#" className={styles.navItem}>
            <FontAwesomeIcon icon={faPlug} className={styles.navIcon} /> Integrations
          </a>
        </nav>

        <div className={styles.upgradeBox}>
            <img src="/visily-image-1859.webp" alt="" />
          <p className={styles.upgradeText}>V2.0 is available</p>
          <button className={styles.tryNowBtn}>Try now</button>
        </div>
        <div className={styles.madeWith}>Made with Visily</div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        
        {/* TOP HEADER */}
        <header className={styles.topHeader}>
          <div className={styles.searchBar}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
            <input type="text" placeholder="Search" />
          </div>
          <div className={styles.headerIcons}>
            <FontAwesomeIcon icon={faBell} className={styles.helpIcon} />
            <FontAwesomeIcon icon={faCircleQuestion} className={styles.helpIcon} />
            <div className={styles.avatar}><img src="/visily-avatar-42.webp" alt="" width={"40px"} /></div>
          </div>
        </header>

        <div className={styles.pageContent}>
          <h1 className={styles.pageTitle}>Dashboard</h1>

          {/* STATS CARDS */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statHeader}>Turnover</div>
              <div className={styles.statValue}>$92,405</div>
              <div className={styles.statChange}>
                <span className={styles.positive}>
                  <FontAwesomeIcon icon={faArrowUp} /> 5.39%
                </span> period of change
              </div>
              <a href="#" className={styles.detailLink}>Detailed report</a>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statHeader}>Profit</div>
              <div className={styles.statValue}>$32,218</div>
              <div className={styles.statChange}>
                <span className={styles.positive}>
                  <FontAwesomeIcon icon={faArrowUp} /> 5.39%
                </span> period of change
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statHeader}>New customer</div>
              <div className={styles.statValue}>298</div>
              <div className={styles.statChange}>
                <span className={styles.positive}>
                  <FontAwesomeIcon icon={faArrowUp} /> 6.84%
                </span> period of change
              </div>
            </div>
          </div>

          {/* DATA TABLE SECTION */}
          <div className={styles.tableContainer}>
            <div className={styles.tableToolbar}>
              <div className={styles.resultsCount}>63 results</div>
              <div className={styles.tableActions}>
                <button className={styles.actionBtn}>Import</button>
                <button className={styles.actionBtn}>Export</button>
              </div>
            </div>

            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>CUSTOMER NAME</th>
                  <th>COMPANY</th>
                  <th>ORDER VALUE</th>
                  <th>ORDER DATE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {customersData.map((row, index) => (
                  <tr key={index}>
                    <td className={styles.fw500}>{row.name}</td>
                    <td>{row.company}</td>
                    <td>{row.value}</td>
                    <td>{row.date}</td>
                    <td>
                      <span className={`${styles.statusBadge} ${styles[row.status.toLowerCase().replace('-', '')]}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* PAGINATION */}
            <div className={styles.pagination}>
              <button className={styles.pageBtn}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className={`${styles.pageBtn} ${styles.activePage}`}>1</button>
              <button className={styles.pageBtn}>2</button>
              <button className={styles.pageBtn}>3</button>
              <span className={styles.pageDots}>...</span>
              <button className={styles.pageBtn}>10</button>
              <button className={styles.pageBtn}>11</button>
              <button className={styles.pageBtn}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;