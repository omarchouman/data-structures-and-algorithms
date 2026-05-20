"use client";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface Props {
  index: number;
  total: number;
  playing: boolean;
  speedMs: number;
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
  onSpeedChange: (ms: number) => void;
}

const msToSlider = (ms: number) => Math.round(800 / ms);
const sliderToMs = (v: number) => Math.round(800 / v);
const sliderToLabel = (v: number) => `${(v * 0.5).toFixed(1)}×`;

export function AnimationPlayer({
  index,
  total,
  playing,
  speedMs,
  onPlay,
  onPause,
  onReset,
  onSpeedChange,
}: Props) {
  const sliderValue = msToSlider(speedMs);
  const isFinished = index >= total - 1;

  return (
    <div className="flex flex-col gap-3 p-4 border-t border-slate-200 bg-white">
      <div className="flex items-center gap-3 flex-wrap">
        <Button
          variant="default"
          size="sm"
          onClick={playing ? onPause : onPlay}
          disabled={!playing && isFinished}
        >
          {playing ? "Pause" : "Play"}
        </Button>
        <Button variant="outline" size="sm" onClick={onReset}>
          Reset
        </Button>
        <div className="flex items-center gap-2 ml-4">
          <span className="text-sm text-slate-500">Speed</span>
          <div className="w-32">
            <Slider
              min={1}
              max={8}
              step={1}
              value={[sliderValue]}
              onValueChange={([v]) => onSpeedChange(sliderToMs(v))}
            />
          </div>
          <span className="text-sm text-slate-500 w-10">{sliderToLabel(sliderValue)}</span>
        </div>
      </div>
      <p className="text-sm text-slate-400">
        Step {index + 1} / {total}
      </p>
    </div>
  );
}
