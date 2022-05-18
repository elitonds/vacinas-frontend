import { Layout, Menu } from "antd";
import { IMenu } from "../../dto/menu/menu.dto";
import "./home.css";

const { Header } = Layout;

interface Props {}

const Home: React.FC<Props> = () => {
  const menuList: IMenu[] = [
    {
      key: "cadasters",
      label: "Cadastros",
      submenus: [
        { key: "doctors", label: "Médicos" },
        { key: "pacients", label: "Pacientes" },
        {
          key: "items",
          label: "Itens",
          submenus: [
            {
              key: "general_data",
              label: "Dados gerais",
            },
            {
              key: "price_table",
              label: "Tabela de preços",
              submenus: [
                {
                  key: "price_cadaster",
                  label: "Cadastrar preços",
                },
                {
                  key: "price_history",
                  label: "Histórico de preços",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: "records",
      label: "Fichas",
    },
    {
      key: "reports",
      label: "Relatórios",
    },
    {
      key: "invoice",
      label: "Nota fiscal",
    },
    {
      key: "utils",
      label: "Utilitários",
    },
  ];

  const buildSubMenu = (submenuList: IMenu[]) => {
    return submenuList.map((submenuItem) => {
      const { key, label, submenus } = submenuItem;
      if (submenus) {
        return (
          <Menu.SubMenu key={key} title={label}>
            {buildSubMenu(submenus)}
          </Menu.SubMenu>
        );
      } else {
        return <Menu.Item key={key}>{label}</Menu.Item>;
      }
    });
  };

  const buildMenu = () => {
    return menuList.map((menuItem) => {
      const { key, label, submenus } = menuItem;
      return (
        <Menu.SubMenu key={key} title={label}>
          {submenus ? buildSubMenu(submenus) : ""}
        </Menu.SubMenu>
      );
    });
  };

  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">{buildMenu()}</Menu>
      </Header>
    </Layout>
  );
};

export default Home;
