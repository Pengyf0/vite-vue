// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";

/** 引入柱状图and折线图图表，图表后缀都为 Chart  */
import {
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  LinesChart,//这里开始
  // CustomChart,
  // ScatterChart,
  // RadarChart,
  // TreeChart,
  // TreemapChart,
  GraphChart,
  // GaugeChart,
  // FunnelChart,
  // ParallelChart,
  // SankeyChart,
  // BoxplotChart,
  // CandlestickChart,
  EffectScatterChart,
  // HeatmapChart,
  // PictorialBarChart,
  // ThemeRiverChart,
  // SunburstChart
} from "echarts/charts";

// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  GeoComponent,
  VisualMapComponent,
  // PolarComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  GraphicComponent,
  ToolboxComponent,
  // AxisPointerComponent,
  // BrushComponent,
  TimelineComponent,
  // MarkPointComponent,
  MarkLineComponent,
  // MarkAreaComponent,
  // LegendScrollComponent,
  DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent
} from "echarts/components";

// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";

// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { SVGRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
  LegendComponent,
  GeoComponent,
  VisualMapComponent,
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  LinesChart,//这里开始测试
  // CustomChart,
  // ScatterChart,
  // RadarChart,
  // TreeChart,
  // TreemapChart,
  GraphChart,
  // GaugeChart,
  // FunnelChart,
  // ParallelChart,
  // SankeyChart,
  // BoxplotChart,
  // CandlestickChart,
  EffectScatterChart,
  // HeatmapChart,
  // PictorialBarChart,
  // ThemeRiverChart,
  // SunburstChart,
  // PolarComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  ToolboxComponent,
  // AxisPointerComponent,
  // BrushComponent,
  TimelineComponent,
  // MarkPointComponent,
  MarkLineComponent,
  // MarkAreaComponent,
  // LegendScrollComponent,
  DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent
]);

// 导出
export default echarts;