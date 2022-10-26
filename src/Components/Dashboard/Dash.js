/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Dash.css';
import 'antd/dist/antd.css';
import { Button, Dropdown, Menu, Space, Breadcrumb } from 'antd';
import { SearchOutlined, BellOutlined, DownOutlined } from '@ant-design/icons';
import img from '../../assets/Shriram City.jpeg';
import UpdateDetails from '../../page';

const menu = (
  <Menu
    items={[
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            1st menu item
          </a>
        ),
        key: '0',
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            2nd menu item
          </a>
        ),
        key: '1',
      },
    ]}
  />
)

function Dash() {
  return (
    <div className="container">
      <div className="container-1">
        <header className="head">
          <div className="content-1">
            <img src={img} alt="" />
          </div>

          <div className="content-2">
            <Button
              icon={<SearchOutlined />}
              size="large"
              className="search-button"
            />

            <BellOutlined className="bell-button" />

            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <DownOutlined className="down-button" />
                </Space>
              </a>
            </Dropdown>
          </div>
        </header>

        <section>
          <div className="container-2">
            <div className="dashboard">
              <Breadcrumb separator=">">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                {/* <Breadcrumb.Item><Link to="/lead">Leads</Link></Breadcrumb.Item> */}
                <Breadcrumb.Item style={{ color: '#CC1F35' }}>
                  Upload Profile
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="BreadcrumbTitle">Update Profile</div>
          </div>
        </section>

        <section>
          <div className="container-3">
           <UpdateDetails/>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Dash