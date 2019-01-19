import {
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';

import {
  TdChartOptionsService,
  ITdSeries,
  TdSeriesComponent,
} from '@covalent/echarts/base';

export type TdWordcloudShape = 'circle' | 'cardioid' | 'diamond' | 'triangle-forward' | 'triangle' | 'pentagon' | 'star';

export interface ITdWordcloudTextStyle {
  normal?: {
    fontFamily?: string,
    fontWeight?: string,
    color?: string | ((x: any) => string),
  };
  emphasis?: {
    shadowBlur?: number,
    shadowColor?: string,
  };
}

export interface ITdWordCloudData {
  name: string;
  value: number;
  textStyle?: ITdWordcloudTextStyle;
}

export interface ITdWordcloudSeries extends ITdSeries<'wordCloud'> {
  data?: ITdWordCloudData[];
  shape?: TdWordcloudShape;
  left?: string | number;
  top?: string | number;
  width?: string | number;
  height?: string | number;
  right?: string | number;
  bottom?: string | number;
  sizeRange?: number[];
  rotationRange?: number[];
  rotationStep?: number;
  gridSize?: number;
  drawOutOfBound?: boolean;
  textStyle?: ITdWordcloudTextStyle;
}

@Component({
  selector: 'td-chart-series[td-wordcloud]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesWordcloudComponent),
  }],
})
export class TdChartSeriesWordcloudComponent extends TdSeriesComponent<'wordCloud'> implements ITdWordcloudSeries {
  @Input('data') data: ITdWordCloudData[];
  @Input('shape') shape: TdWordcloudShape;
  @Input('left') left: string | number;
  @Input('top') top: string | number;
  @Input('width') width: string | number;
  @Input('height') height: string | number;
  @Input('right') right: string | number;
  @Input('bottom') bottom: string | number;
  @Input('sizeRange') sizeRange: number[];
  @Input('rotationRange') rotationRange: number[];
  @Input('rotationStep') rotationStep: number;
  @Input('gridSize') gridSize: number;
  @Input('drawOutOfBound') drawOutOfBound: boolean;
  @Input('textStyle') textStyle: ITdWordcloudTextStyle;

  constructor(_optionsService: TdChartOptionsService) {
    super('wordCloud', _optionsService);
  }

  getConfig(): any {
    return {
      shape: this.shape,
      left: this.left,
      top: this.top,
      width: this.width,
      height: this.height,
      right: this.right,
      bottom: this.bottom,
      sizeRange: this.sizeRange,
      rotationRange: this.rotationRange,
      rotationStep: this.rotationStep,
      gridSize: this.gridSize,
      drawOutOfBound: this.drawOutOfBound,
      textStyle: this.textStyle,
    };
  }
}
