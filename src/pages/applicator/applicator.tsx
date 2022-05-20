import { Button, Form, Input, Select } from "antd";
import Card from "../../components/card/card";

interface Props {}

const Applicator: React.FC<Props> = () => {
  const { Item } = Form;
  return (
    <>
      <Card title="Cadastro de aplicador">
        <Form
          name="pacient-form"
          onFinish={() => {}}
          onFinishFailed={() => {}}
          className="d-flex row"
        >
          <Item
            name="applicator-name"
            className="col-md-6"
            rules={[{ required: true, message: "O campo nome é obrigatório" }]}
          >
            <Input id="name" placeholder="Nome" maxLength={200} />
          </Item>
          <Item name="reg-concil" className="col-md-6">
            <Input
              id="reg-concil"
              placeholder="Tipo(Coren/CRF/CRM) e número de registro no conselho "
              maxLength={200}
            />
          </Item>

          <Item name="user" className="col-md-6">
            <Select id="user" placeholder="Usuário" />
          </Item>
          <Item className="col-md-12" style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Cadastrar
            </Button>
          </Item>
        </Form>
      </Card>
    </>
  );
};

export default Applicator;
