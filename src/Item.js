import {graphql} from 'graphql'
import React, {PropTypes} from 'react'
import Route from 'found/lib/Route'
import {getContext} from 'recompose'
import React3 from 'react-three-renderer'

THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader())

const relayContext = Component =>
  getContext({
    relay: PropTypes.shape({}),
  })(Component)

export const query = graphql`
  query ItemQuery($itemID: ObjID!) {
    item(id: $itemID) {
      name
    }
  }
`

const WIDTH = 640
const HEIGHT = 480

export class Component extends React.Component {
  constructor(props) {
    super(props)

    this.camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 5000)
    this.camera.position.set(0, 0, -50)
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(WIDTH, HEIGHT)
    this.scene = new THREE.Scene()
    // const directional = new THREE.DirectionalLight(0xffeedd);
    // directional.position.set(0, 0, 1).normalize();
    // this.scene.add(directional);
    this.scene.add(new THREE.AmbientLight(0xffffff))

    this.state = {
      windowHalfX: WIDTH / 2,
      windowHalfY: HEIGHT / 2,
    }
  }

  componentDidMount() {
    const onProgress = function(xhr) {
      if (xhr.lengthComputable) {
        const percentComplete = xhr.loaded / xhr.total * 100
        console.log(Math.round(percentComplete, 2) + '% downloaded')
      }
    }

    const onError = function(xhr) {}

    var loader = new THREE.ColladaLoader()
    loader.options.convertUpAxis = true
    loader.load('/static/weapon.dae', collada => {
      const object = collada.scene
      const box = new THREE.Box3().setFromObject(object)
      object.position.y = -box.getCenter().y
      this.scene.add(object)
    })
    this.threeContainer.appendChild(this.renderer.domElement)
    this.controls = new THREE.OrbitControls(
      this.camera,
      this.renderer.domElement,
    )
    this.animate()
  }

  animate = () => {
    requestAnimationFrame(this.animate)
    this.controls.update()
    this.renderScene()
  }

  renderScene = () => {
    const {camera, renderer, scene} = this

    // camera.lookAt(scene.position);
    renderer.render(scene, camera)
  }

  render() {
    const {item} = this.props

    return (
      <div>
        {item.name}
        <div ref={container => (this.threeContainer = container)} />
      </div>
    )
  }
}

export const routeConfig = path => ({
  Component: Component,
  path,
  prepareVariables: params => {
    return {
      itemID: params.itemID,
    }
  },
  query,
})
