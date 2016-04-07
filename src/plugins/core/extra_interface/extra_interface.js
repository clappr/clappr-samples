import {Events, Styler, UICorePlugin} from 'Clappr'

import style from './public/style.scss'

export default class CoreExtraInterface extends UICorePlugin {
  get attributes() {
    return { class: 'core-extra-interface hide' }
  }

  bindEvents() {
    console.log(this.core.mediaControl)
    this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_SHOW, this.show)
    this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_HIDE, this.hide)
  }

  show() {
    this.$el.removeClass('hide')
  }

  hide() {
    this.$el.addClass('hide')
  }

  render() {
    this.$el.append(Styler.getStyleFor(style))
    console.log('blah')
    this.core.$el.append(this.el)
    return this
  }
}
