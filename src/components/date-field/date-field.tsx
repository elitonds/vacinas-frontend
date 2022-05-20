import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/pt_BR";

interface DateFieldProps {
  id: string;
  className?: string;
  placeholder?: string;
  format?: string;
}

const DateField: React.FC<DateFieldProps> = (props) => {
  const { id, className, placeholder, format } = props;
  return (
    <DatePicker
      id={id}
      className={className}
      placeholder={placeholder}
      format={format || "DD/MM/yyyy"}
      locale={locale}
    />
  );
};

export default DateField;
