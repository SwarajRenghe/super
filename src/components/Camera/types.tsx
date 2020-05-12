export interface CameraProps {}
export interface CameraState {
  type: string;
  flashMode: string;
  videoURI: string | null;
  selected: 'camera' | 'video';
}
