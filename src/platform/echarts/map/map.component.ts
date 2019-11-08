import {
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';

import { 
  TdChartOptionsService,
  ITdItemStyle,
  ITdMarkPoint,
  ITdMarkLine,
  ITdMarkArea,
  ITdSeries,
  ITdLabel,
  TdSeriesComponent,
} from '@covalent/echarts/base';

export type TdMapValueCalculation = 'sum' | 'average' | 'max' | 'min';
export type TdMapSeriesLayoutBy = 'column' | 'row';

export interface ITdMapScaleLimit {
  min?: number;
  max?: number;
}

export interface ITdMapItemStyle {
  areaColor?: ITdItemStyle;
  emphasis?: ITdItemStyle;
}

export interface ITdMapSeries extends ITdSeries<'map'> {
  map?: string;
  roam?: boolean;
  center?: number[];
  aspectScale?: number;
  boudingCoords?: any[];
  zoom?: number;
  scaleLimit?: ITdMapScaleLimit;
  nameMap?: object;
  selectedMode?: boolean | string;
  label?: ITdLabel;
  itemStyle?: ITdMapItemStyle;
  zLevel?: number;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  layoutCenter?: any[];
  layoutSize?: any[];
  geoIndex?: number;
  mapValueCalculation?: TdMapValueCalculation;
  showLegendSymbol?: boolean;
  seriesLayoutBy?: string;
  data?: any[];
  markPoint?: ITdMarkPoint;
  markLine?: ITdMarkLine;
  markArea?: ITdMarkArea;
  silent?: boolean;
}

@Component({
  selector: 'td-chart-series[td-map]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesMapComponent),
  }],
})
export class TdChartSeriesMapComponent extends TdSeriesComponent<'map'> implements ITdMapSeries {

@Input('map') map: string;
@Input('roam') roam: boolean;
@Input('center') center: number[];
@Input('aspectScale') aspectScale: number;
@Input('boudingCoords') boudingCoords: any[];
@Input('zoom') zoom: number;
@Input('scaleLimit') scaleLimit: ITdMapScaleLimit;
@Input('nameMap') nameMap: object;
@Input('selectedMode') selectedMode: boolean | string;
@Input('label') label: ITdLabel;
@Input('itemStyle') itemStyle: ITdMapItemStyle;
@Input('zLevel') zLevel: number;
@Input('z') z: number;
@Input('left') left: string | number;
@Input('top') top: string | number;
@Input('right') right: string | number;
@Input('bottom') bottom: string | number;
@Input('layoutCenter') layoutCenter: any[];
@Input('layoutSize') layoutSize: any[];
@Input('geoIndex') geoIndex: number;
@Input('mapValueCalculation') mapValueCalculation: TdMapValueCalculation;
@Input('showLegendSymbol') showLegendSymbol: boolean;
@Input('seriesLayoutBy') seriesLayoutBy: string;
@Input('markPoint') markPoint: ITdMarkPoint;
@Input('markLine') markLine: ITdMarkLine;
@Input('markArea') markArea: ITdMarkArea;
@Input('silent') silent: boolean;

  constructor(_optionsService: TdChartOptionsService) {
    super('map', _optionsService);
  }

  getConfig(): any {
    return {
      map: this.map,
      roam: this.roam,
      center: this.center,
      aspectScale: this.aspectScale,
      boudingCoords: this.boudingCoords,
      zoom: this.zoom,
      scaleLimit: this.scaleLimit,
      nameMap: this.nameMap,
      selectedMode: this.selectedMode,
      label: this.label,
      itemStyle: this.itemStyle,
      zLevel: this.zLevel,
      z: this.z,
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      layoutCenter: this.layoutCenter,
      layoutSize: this.layoutSize,
      geoIndex: this.geoIndex,
      mapValueCalculation: this.mapValueCalculation,
      showLegendSymbol: this.showLegendSymbol,
      seriesLayoutBy: this.seriesLayoutBy,
      markPoint: this.markPoint,
      markLine: this.markLine,
      markArea: this.markArea,
      silent: this.silent,
    };
  }
}
