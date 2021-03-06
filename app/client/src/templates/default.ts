import { generateReactKey } from "utils/generators";

export default {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1242,
  snapColumns: 16,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1292,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  detachFromLayout: true,
  minHeight: 1292,
  dynamicBindings: {},
  parentColumnSpace: 1,
  leftColumn: 0,
  children: [
    {
      backgroundColor: "#FFFFFF",
      widgetName: "Container1",
      type: "CONTAINER_WIDGET",
      containerStyle: "card",
      isVisible: true,
      isLoading: false,
      parentColumnSpace: 75.25,
      parentRowSpace: 38,
      dynamicBindings: {},
      leftColumn: 0,
      rightColumn: 8,
      topRow: 0,
      bottomRow: 9,
      snapColumns: 16,
      orientation: "VERTICAL",
      children: [
        {
          text: "Title",
          textStyle: "HEADING",
          widgetName: "Text1",
          type: "TEXT_WIDGET",
          isVisible: true,
          isLoading: false,
          parentColumnSpace: 35.25,
          parentRowSpace: 38,
          dynamicBindings: {},
          leftColumn: 0,
          rightColumn: 3,
          topRow: 0,
          bottomRow: 1,
          widgetId: generateReactKey(),
        },
      ],
      widgetId: generateReactKey(),
    },
    {
      backgroundColor: "#FFFFFF",
      widgetName: "Container3",
      type: "CONTAINER_WIDGET",
      containerStyle: "card",
      isVisible: true,
      isLoading: false,
      parentColumnSpace: 75.25,
      parentRowSpace: 38,
      dynamicBindings: {},
      leftColumn: 0,
      rightColumn: 16,
      topRow: 9,
      bottomRow: 23,
      snapColumns: 16,
      orientation: "VERTICAL",
      children: [
        {
          text: "Title",
          textStyle: "HEADING",
          widgetName: "Text3",
          type: "TEXT_WIDGET",
          isVisible: true,
          isLoading: false,
          parentColumnSpace: 72.875,
          parentRowSpace: 38,
          dynamicBindings: {},
          leftColumn: 0,
          rightColumn: 3,
          topRow: 0,
          bottomRow: 1,
          widgetId: generateReactKey(),
        },
      ],
      widgetId: generateReactKey(),
    },
    {
      backgroundColor: "#FFFFFF",
      widgetName: "Container4",
      type: "CONTAINER_WIDGET",
      containerStyle: "card",
      isVisible: true,
      isLoading: false,
      parentColumnSpace: 75.25,
      parentRowSpace: 38,
      dynamicBindings: {},
      leftColumn: 8,
      rightColumn: 16,
      topRow: 0,
      bottomRow: 9,
      snapColumns: 16,
      orientation: "VERTICAL",
      children: [
        {
          text: "Title",
          textStyle: "HEADING",
          widgetName: "Text2",
          type: "TEXT_WIDGET",
          isVisible: true,
          isLoading: false,
          parentColumnSpace: 35.25,
          parentRowSpace: 38,
          dynamicBindings: {},
          leftColumn: 0,
          rightColumn: 3,
          topRow: 0,
          bottomRow: 1,
          widgetId: generateReactKey(),
        },
      ],
      widgetId: generateReactKey(),
    },
  ],
};
