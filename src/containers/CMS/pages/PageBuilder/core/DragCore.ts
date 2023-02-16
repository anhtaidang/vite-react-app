class DragCore {
  private core: any;

  public getAttemptToRemove: () => any;

  public setAttemptToRemove: (status: any) => void;

  public setDraggedElement: (draggedElement: any) => void;

  public getDraggedElement: () => any;

  public registerPaletteElements: (registeredPaletteElements: any) => void;

  public getRegisteredPaletteElements: () => any;

  public setDropPostion: (dropPosition: any) => void;

  public getDropPostion: () => void;

  public error: any;

  public log: any;

  constructor() {
    // main object/store
    this.core = {};

    // all public getter/setter goes here

    /**
     * function to get attemptToRemove
     * @returns {Boolean} attemptToRemove
     */
    this.getAttemptToRemove = () => this.core.attemptToRemove;

    /**
     * function to set user's attempt to remove the element
     * @param {Boolean} status
     */
    this.setAttemptToRemove = (status) => {
      this.core.attemptToRemove = status;
    };

    /**
     * function to set dragged element
     * @param {Object | null} draggedElement
     */
    this.setDraggedElement = (draggedElement) => {
      this.core.draggedElement = draggedElement;
    };

    /**
     * function to return dragged element
     * @returns {Object}
     */
    this.getDraggedElement = () => this.core.draggedElement;

    /**
     * function to register palette elements
     * @param {Array} registeredPaletteElements - palette elements
     */
    this.registerPaletteElements = (registeredPaletteElements) => {
      this.core.registeredPaletteElements = registeredPaletteElements;
    };

    /**
     * function to return registered palette elements
     * @returns {Array} - array of palette elements
     */
    this.getRegisteredPaletteElements = () =>
      this.core.registeredPaletteElements || [];

    /**
     * function to set drop position
     * @param {Number} dropPosition
     */
    this.setDropPostion = (dropPosition) => {
      this.core.dropPosition = dropPosition;
    };

    /**
     * function to return drop position
     * @returns {Number}
     */
    this.getDropPostion = () => this.core.dropPosition;

    /* eslint no-console:0 */

    /**
     * function to give an error message
     * @param {String} message - any message to be print
     * @returns {Boolean}
     */
    this.error = console.error;

    /**
     * function to log a message
     * @param {String} message - any message to be print
     * @returns {Boolean}
     */
    this.log = console.log;
  }
}

const coreInstant = new DragCore();
// @ts-ignore
window.DragCore = coreInstant;

export default coreInstant;
