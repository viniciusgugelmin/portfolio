import { Interweave } from "interweave";
import { ToHtmlDTO } from "./ToHtmlDTO";

class ToHtml implements ToHtmlDTO.IToHtml {
  public handle({ text, className = "" }: ToHtmlDTO.HandleDTO): JSX.Element {
    return <Interweave content={text} className={className} />;
  }
}

export { ToHtml };
