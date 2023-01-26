// ====================
// MAIN PAGE
// ====================

// IMPORTS
// =============
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { IReportEmbedConfiguration, models, Page, Report, service, VisualDescriptor } from 'powerbi-client';
import 'powerbi-report-authoring';
import { errorClass, errorElement, hidden, position, reportUrl, successClass, successElement } from '../../../constants';

// Handles the embed config response for embedding
export interface ConfigResponse {
  Id: string;
  EmbedUrl: string;
  EmbedToken: {
    Token: string;
  };
}

// COMPONENT
// ===============
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    // Pass the basic embed configurations to the wrapper to bootstrap the report on first load
    // Values for properties like embedUrl, accessToken and settings will be set on click of button
    reportConfig = {
      type: 'report',
      id: undefined,
      embedUrl: undefined,
      tokenType: models.TokenType.Embed,
      accessToken: undefined,
      settings: undefined,
    };
  
    /**
     * Map of event handlers to be applied to the embedded report
     */
    // Update event handlers for the report by redefining the map using this.eventHandlersMap
    // Set event handler to null if event needs to be removed
    // More events can be provided from here
    // https://docs.microsoft.com/en-us/javascript/api/overview/powerbi/handle-events#report-events
    eventHandlersMap = new Map<string, (event?: service.ICustomEvent<any>) => void>([
      ['loaded', () => console.log('Report has loaded')],
      [
        'rendered',
        () => {
          console.log('Report has rendered');
  
          // Set displayMessage to empty when rendered for the first time
          if (!this.isEmbedded) {
            this.displayMessage = 'Use the buttons above to interact with the report using Power BI Client APIs.';
          }
  
          // Update embed status
          this.isEmbedded = true;
        },
      ],
      [
        'error',
        (event?: service.ICustomEvent<any>) => {
          if (event) {
            console.error(event.detail);
          }
        },
      ],
      ['visualClicked', () => console.log('visual clicked')],
      ['pageChanged', (event) => console.log(event)],
    ]);
  
  constructor() {}

  ngOnInit(): void {}
}
