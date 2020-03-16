import { ThreeForceGraphGeneric } from 'three-forcegraph';

export interface ConfigOptions {}

type Accessor<In, Out> = Out | string | ((obj: In) => Out);
type ObjAccessor<T> = Accessor<object, T>;

// don't surface these internal props from inner ThreeForceGraph
type ExcludedInnerProps = 'onLoading' | 'onFinishLoading' | 'onUpdate' | 'onFinishUpdate' | 'tickFrame';

export interface ForceGraph3DGenericInstance<ChainableInstance>
    extends Omit<ThreeForceGraphGeneric<ChainableInstance>, ExcludedInnerProps> {
  (element: HTMLElement): ChainableInstance;
  _destructor(): void;

  // Container layout
  width(): number;
  width(width: number): ChainableInstance;
  height(): number;
  height(height: number): ChainableInstance;
  backgroundColor(): string;
  backgroundColor(color: string): ChainableInstance;
  showNavInfo(): boolean;
  showNavInfo(enabled: boolean): ChainableInstance;

  // Labels
  nodeLabel(): ObjAccessor<string>;
  nodeLabel(textAccessor: ObjAccessor<string>): ChainableInstance;
  nodeDesc(): ObjAccessor<string>;
  nodeDesc(textAccessor: ObjAccessor<string>): ChainableInstance;
  linkLabel(): ObjAccessor<string>;
  linkLabel(textAccessor: ObjAccessor<string>): ChainableInstance;
  linkDesc(): ObjAccessor<string>;
  linkDesc(textAccessor: ObjAccessor<string>): ChainableInstance;

  // Interaction
  onNodeCenterHover(callback: (node: object | null, previousNode: object | null) => void): ChainableInstance;
  onLinkCenterHover(callback: (link: object | null, previousLink: object | null) => void): ChainableInstance;
}

export type ForceGraph3DInstance = ForceGraph3DGenericInstance<ForceGraph3DInstance>;

declare function ForceGraph3D(configOptions?: ConfigOptions): ForceGraph3DInstance;

export default ForceGraph3D;
