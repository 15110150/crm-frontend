export const navItems = [
  {
    name: 'Trang chủ',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'Admin'
    }
  },
  {
    title: true,
    name: 'Tài khoản'
  },
  {
    name: 'Tài khoản cá nhân',
    url: '/account/app-user-account',
    icon: 'icon-drop'
  },
  {
    name: 'Tài khoản người dùng',
    url: '/account/app-manage-account',
    icon: 'icon-pencil'
  },
  {
    name: 'Lịch làm việc',
    url: '/account/app-work-calendar',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Quản lý'
  },
  {
    name: 'Quản lí đào tạo',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Học viên tiềm năng',
        url: '/base/potentialStudent/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Học viên',
        url: '/base/student/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Giảng viên',
        url: '/base/lecturer/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Khóa học',
        url: '/base/course/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Danh mục khóa học',
        url: '/base/courseCategory/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Lớp học',
        url: '/base/app-class',
        icon: 'icon-puzzle'
      },
      {
        name: 'Chấm công',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Quá trình học tập',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Quản lí trung tâm',
    url: '/manage-center',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Loại nhân viên',
        url: '/manage-center/app-employee-kind',
        icon: 'icon-cursor'
      },
      {
        name: 'Nhân viên',
        url: '/manage-center/app-employee',
        icon: 'icon-cursor'
      },
      {
        name: 'Thu tiền học',
        url: '/manage-center/app-invoice',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Quản lí marketing',
    url: '/campaign',
    icon: 'icon-star',
    children: [
      {
        name: 'Chiến dịch SMS',
        url: '/campaign/app-email-campaign',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Chiến dịch Email',
        url: '/campaign/app-sms-campaign',
        icon: 'icon-star'
      },
      {
        name: 'Kế hoạch chiến dịch',
        url: '/campaign/app-detail-campaign',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Thống kê',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Thông báo',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success'
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger'
  }
];
function newFunction() {
  return '/base/student';
}

