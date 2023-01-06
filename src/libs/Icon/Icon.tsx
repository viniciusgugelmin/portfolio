import {
  Code,
  Desktop,
  Projects,
  Book,
  Contact,
  DocumentUser,
  Sun,
  Moon,
  DocumentMissing,
} from "grommet-icons";
import { IconDTO } from "./IconDTO";

class Icon implements IconDTO.IIcon {
  public show({
    name,
    size = "medium",
    className = "",
    filled = true,
  }: IconDTO.ShowDTO): JSX.Element {
    const props = {
      size,
      className: (filled ? "vkg-path-fill " : "") + className,
    };

    switch (name) {
      case "about":
        return <DocumentUser {...props} />;
      case "skills":
        return <Code {...props} />;
      case "work":
        return <Desktop {...props} />;
      case "education":
        return <Book {...props} />;
      case "projects":
        return <Projects {...props} />;
      case "contact":
        return <Contact {...props} />;
      case "sun":
        return <Sun {...props} />;
      case "moon":
        return <Moon {...props} />;
      default:
        return <DocumentMissing {...props} />;
    }
  }
}

export { Icon };
