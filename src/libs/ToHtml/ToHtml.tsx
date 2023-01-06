import { Interweave } from "interweave";
import { ToHtmlDTO } from "./ToHtmlDTO";

class ToHtml implements ToHtmlDTO.IToHtml {
  public handle({ text }: ToHtmlDTO.HandleDTO): JSX.Element {
    return <Interweave content={text} />;
  }
}

export { ToHtml };
