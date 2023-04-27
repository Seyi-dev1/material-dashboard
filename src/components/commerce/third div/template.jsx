import templatestyle from './template.module.scss'
import { Line } from 'rc-progress';

const Template = ({ text, fig, fill, trail, percent }) => (
  <div className={templatestyle.template} >
  <div className={templatestyle.text}>
  <div className={templatestyle.title}>{text}</div>
  <div className={templatestyle.figures}>
  <span className={templatestyle.bold}>{fig}</span><span className={templatestyle.light}>({percent}%)</span>
  </div>
  </div>
   <Line percent={percent} strokeWidth={0.7} strokeColor={fill}   trailColor={trail}/>
  </div>
);

export default Template