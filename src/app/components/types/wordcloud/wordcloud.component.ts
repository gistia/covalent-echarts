import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ITdWordCloudData } from '@covalent/echarts/wordcloud/wordcloud.component';

@Component({
  selector: 'types-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class TypesWordcloudComponent {
  words: string[] = [ 'Covalent', 'Teradata', 'Angular', 'TypeScript', 'JavaScript', 'Protractor', 'Karma',
                      'Ruby', 'Rails', 'Ruby on Rails', 'Java', 'Scala', 'RSpec', 'Cucumber', 'JUnit', 'Elixir',
                      'Twitter Bootstrap', 'HTML', 'CSS', 'SASS', 'PHP' ];

  randomWords: ITdWordCloudData[] = Array.apply(undefined, Array(30)).map(() => {
    return {
      name: this.words[Math.floor(Math.random() * this.words.length)],
      value: Math.floor(Math.random() * 100),
      textStyle: {
        normal: {
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
        },
      },
    };
  });

  // Chart config
  config: any = {
    tooltip: {},
    series: [
      {
        type: 'wordCloud',
        shape: 'diamond',
        color: this.randomColor,
        data: this.randomWords,
      },
    ],
  };

  randomColor(): string {
    return 'rgb(' + [
      Math.round(Math.random() * 160),
      Math.round(Math.random() * 160),
      Math.round(Math.random() * 160),
    ].join(',') + ')';
  }
}
