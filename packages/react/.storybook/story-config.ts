/**
 * Copyright (c) 2022, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

enum StorybookCategories {
  DataDisplay = 'Data Display',
  Foundations = 'Foundations',
  Feedback = 'Feedback',
  Icons = 'Icons',
  Inputs = 'Inputs',
  Layout = 'Layout',
  Navigation = 'Navigation',
  Patterns = 'Patterns',
  Theme = 'Theme',
  Typography = 'Typography',
  Surfaces = 'Surfaces',
}

export type Stories =
  | 'AccountOverview'
  | 'ActionCard'
  | 'AppBar'
  | 'AppShell'
  | 'Avatar'
  | 'Badge'
  | 'Breadcrumbs'
  | 'Box'
  | 'Button'
  | 'CircularProgress'
  | 'Card'
  | 'CardActions'
  | 'CardContent'
  | 'CardHeader'
  | 'Carousel'
  | 'CircularProgressAvatar'
  | 'Chip'
  | 'ColorModeToggle'
  | 'Colors'
  | 'ConnectorCard'
  | 'Container'
  | 'Divider'
  | 'Drawer'
  | 'Footer'
  | 'FormHelperText'
  | 'FormControl'
  | 'Grid'
  | 'Header'
  | 'IconButton'
  | 'Icons'
  | 'Image'
  | 'Input'
  | 'InputLabel'
  | 'LinearProgress'
  | 'Link'
  | 'List'
  | 'ListItem'
  | 'ListItemAvatar'
  | 'ListItemButton'
  | 'ListItemIcon'
  | 'ListItemText'
  | 'Menu'
  | 'MenuItem'
  | 'UserDropdownMenu'
  | 'Navbar'
  | 'OutlinedInput'
  | 'PhoneNumberInput'
  | 'Select'
  | 'SignIn'
  | 'Stepper'
  | 'Tab'
  | 'TabPanel'
  | 'Tabs'
  | 'TextField'
  | 'Toolbar'
  | 'Tooltip'
  | 'Typography'
  | 'UserDropdownMenu'
  | 'Welcome'
  | 'Wizard';
export type StorybookConfig = Record<
  Stories,
  {
    hierarchy: string;
    design?: {
      type: 'figma';
      url: string;
    };
    story?: {
      [key: string]: {
        design?: {
          type: 'figma';
          url: string;
        };
      };
    };
  }
>;

const StoryConfig: StorybookConfig = {
  AccountOverview: {
    hierarchy: `${StorybookCategories.Patterns}/Account Overview`,
  },
  ActionCard: {
    hierarchy: `${StorybookCategories.Surfaces}/Action Card`,
  },
  AppBar: {
    hierarchy: `${StorybookCategories.Surfaces}/App Bar`,
  },
  AppShell: {
    hierarchy: `${StorybookCategories.Layout}/App Shell`,
  },
  Avatar: {
    hierarchy: `${StorybookCategories.DataDisplay}/Avatar`,
  },
  Badge: {
    hierarchy: `${StorybookCategories.DataDisplay}/Badge`,
  },
  Box: {
    hierarchy: `${StorybookCategories.Layout}/Box`,
  },
  Breadcrumbs: {
    hierarchy: `${StorybookCategories.Navigation}/Breadcrumbs`,
  },
  Button: {
    hierarchy: `${StorybookCategories.Inputs}/Button`,
  },
  CircularProgress: {
    hierarchy: `${StorybookCategories.Feedback}/Circular Progress`,
  },
  Card: {
    hierarchy: `${StorybookCategories.Surfaces}/Card`,
  },
  CardActions: {
    hierarchy: `${StorybookCategories.Surfaces}/Card Actions`,
  },
  CardContent: {
    hierarchy: `${StorybookCategories.Surfaces}/Card Content`,
  },
  CardHeader: {
    hierarchy: `${StorybookCategories.Surfaces}/Card Header`,
  },
  Carousel: {
    hierarchy: `${StorybookCategories.Patterns}/Carousel`,
  },
  CircularProgressAvatar: {
    hierarchy: `${StorybookCategories.DataDisplay}/Circular Progress Avatar`,
  },
  Chip: {
    hierarchy: `${StorybookCategories.DataDisplay}/Chip`,
  },
  ColorModeToggle: {
    hierarchy: `${StorybookCategories.Theme}/Color Mode Toggle`,
  },
  Colors: {
    hierarchy: `${StorybookCategories.Foundations}/Colors`,
  },
  ConnectorCard: {
    hierarchy: `${StorybookCategories.Patterns}/Connector Card`,
  },
  Container: {
    hierarchy: `${StorybookCategories.Layout}/Container`,
  },
  Divider: {
    hierarchy: `${StorybookCategories.DataDisplay}/Divider`,
  },
  Drawer: {
    hierarchy: `${StorybookCategories.Navigation}/Drawer`,
  },
  Footer: {
    hierarchy: `${StorybookCategories.Navigation}/Footer`,
  },
  FormHelperText: {
    hierarchy: `${StorybookCategories.Inputs}/Form Helper Text`,
  },
  FormControl: {
    hierarchy: `${StorybookCategories.Inputs}/Form Control`,
  },
  Grid: {
    hierarchy: `${StorybookCategories.Layout}/Grid`,
  },
  Header: {
    story: {
      Overview: {
        design: {
          type: 'figma',
          url: 'https://www.figma.com/file/HyEVOfDBGyXsvPSbNdgquW/Navigation%2FHeader?node-id=120%3A1437&t=NT0uoPAY3qLFlkmN-0',
        },
      },
    },
    hierarchy: `${StorybookCategories.Navigation}/Header`,
  },
  Image: {
    hierarchy: `${StorybookCategories.DataDisplay}/Image`,
  },
  Input: {
    hierarchy: `${StorybookCategories.Inputs}/Input`,
  },
  InputLabel: {
    hierarchy: `${StorybookCategories.Inputs}/Input Label`,
  },
  IconButton: {
    hierarchy: `${StorybookCategories.Inputs}/Icon Button`,
  },
  Icons: {
    hierarchy: `${StorybookCategories.Icons}/Icons`,
  },
  LinearProgress: {
    hierarchy: `${ StorybookCategories.Feedback}/Linear Progress`,
  },
  Link: {
    hierarchy: `${StorybookCategories.Navigation}/Link`,
  },
  Menu: {
    hierarchy: `${StorybookCategories.Navigation}/Menu`,
  },
  MenuItem: {
    hierarchy: `${StorybookCategories.Navigation}/Menu Item`,
  },
  Navbar: {
    hierarchy: `${StorybookCategories.Navigation}/Navbar`,
  },
  OutlinedInput: {
    hierarchy: `${StorybookCategories.Inputs}/Outlined Input`,
  },
  List: {
    hierarchy: `${StorybookCategories.DataDisplay}/List`,
  },
  ListItem: {
    hierarchy: `${StorybookCategories.DataDisplay}/List Item`,
  },
  ListItemAvatar: {
    hierarchy: `${StorybookCategories.DataDisplay}/List Item Avatar`,
  },
  ListItemButton: {
    hierarchy: `${StorybookCategories.DataDisplay}/List Item Button`,
  },
  ListItemIcon: {
    hierarchy: `${StorybookCategories.DataDisplay}/List Item Icon`,
  },
  ListItemText: {
    hierarchy: `${StorybookCategories.DataDisplay}/List Item Text`,
  },
  PhoneNumberInput: {
    hierarchy: `${StorybookCategories.Inputs}/Phone Number Input`,
  },
  Select: {
    hierarchy: `${StorybookCategories.Inputs}/Select`,
  },
  SignIn: {
    hierarchy: `${StorybookCategories.Patterns}/Sign In`,
  },
  Stepper: {
    hierarchy: `${StorybookCategories.Surfaces}/Stepper`,
  },
  Tab: {
    hierarchy: `${StorybookCategories.Navigation}/Tab`,
  },
  TabPanel: {
    hierarchy: `${StorybookCategories.Navigation}/Tab Panel`,
  },
  Tabs: {
    hierarchy: `${StorybookCategories.Navigation}/Tabs`,
  },
  TextField: {
    hierarchy: `${StorybookCategories.Inputs}/Text Field`,
  },
  Toolbar: {
    hierarchy: `${StorybookCategories.Surfaces}/Toolbar`,
  },
  Tooltip: {
    hierarchy: `${StorybookCategories.DataDisplay}/Tooltip`,
  },
  Typography: {
    hierarchy: `${StorybookCategories.DataDisplay}/Typography`,
  },
  UserDropdownMenu: {
    hierarchy: `${StorybookCategories.Navigation}/User Dropdown Menu`,
  },
  Welcome: {
    hierarchy: 'Welcome',
  },
  Wizard: {
    hierarchy: `${StorybookCategories.Patterns}/Wizard`,
  }
};

export default StoryConfig;
