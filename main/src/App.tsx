// App.tsx
import React, { useState } from 'react';
import BackOutline from './components/muscles/BackOutline';
import BackMuscles from './components/muscles/BackMuscles';
import FrontOutline from './components/muscles/FrontOutline';
import FrontMuscles from './components/muscles/FrontMuscles';
import Hamstrings from './components/muscles/Hamstrings';
import Fascia from './components/muscles/Fascia';
import LatsSVG from './components/muscles/LatsSVG';
import Abs from './components/muscles/Abs';
import Biceps from './components/muscles/Biceps';
import Chest from './components/muscles/Chest';
import Glutes from './components/muscles/Glutes';
import Calves from './components/muscles/Calves';
import Quads from './components/muscles/Quads';
import Shoulders from './components/muscles/Shoulders';

interface MuscleData {
  description: string;
  exercises: string[];
  exerciseDescription: Record<string, string>;
}

export interface MuscleSVGProps {
  selectedMuscle: string | null;
  onSelect: (muscle: string) => void;
}

const muscleInfo: Record<string, MuscleData> = {
  chest: {
    description: 'The chest muscles (pectorals) are responsible for pushing movements and shoulder stability.',
    exercises: ['Bench Press', 'Push-ups', 'Chest Flyes'],
    exerciseDescription: {
      'Bench Press': 'Compound lift targeting the pectorals, front delts, and triceps.',
      'Push-ups': 'Bodyweight push exercise for chest and triceps.',
      'Chest Flyes': 'Isolation movement that stretches and contracts the chest.'
    }
  },
  shoulders: {
    description: 'Shoulder muscles (deltoids) enable arm rotation and lifting movements.',
    exercises: ['Overhead Press', 'Lateral Raises', 'Front Raises'],
    exerciseDescription: {
      'Overhead Press': 'Vertical pressing movement that builds deltoid and tricep strength.',
      'Lateral Raises': 'Isolates the lateral deltoids for shoulder width.',
      'Front Raises': 'Targets the anterior deltoids for front shoulder development.'
    }
  },
  biceps: {
    description: 'Biceps control elbow flexion and forearm rotation.',
    exercises: ['Bicep Curls', 'Hammer Curls', 'Chin-ups'],
    exerciseDescription: {
      'Bicep Curls': 'Classic curl focusing on the biceps brachii.',
      'Hammer Curls': 'Targets both the biceps and brachialis muscle.',
      'Chin-ups': 'Compound bodyweight pull emphasizing biceps and lats.'
    }
  },
  lats: {
    description: 'Latissimus dorsi muscles assist in pulling and shoulder extension.',
    exercises: ['Pull-ups', 'Lat Pulldowns', 'Bent-over Rows'],
    exerciseDescription: {
      'Pull-ups': 'Bodyweight vertical pulling for lats and upper back.',
      'Lat Pulldowns': 'Cable exercise mimicking pull-ups with adjustable resistance.',
      'Bent-over Rows': 'Compound row for lats, rhomboids, and rear delts.'
    }
  },
  abs: {
    description: 'Abdominal muscles support core stability and trunk flexion.',
    exercises: ['Planks', 'Crunches', 'Leg Raises'],
    exerciseDescription: {
      'Planks': 'Isometric core hold developing stability and endurance.',
      'Crunches': 'Classic movement targeting upper abdominal muscles.',
      'Leg Raises': 'Engages lower abs through controlled hip flexion.'
    }
  },
  fascia: {
    description: 'Lower back muscles support posture and spinal extension.',
    exercises: ['Deadlifts', 'Superman', 'Back Extensions'],
    exerciseDescription: {
      'Deadlifts': 'Powerful lift developing posterior chain and back.',
      'Superman': 'Bodyweight back extension for lower spinal muscles.',
      'Back Extensions': 'Targets spinal erectors and glutes.'
    }
  },
  glutes: {
    description: 'Gluteal muscles power hip extension and stability.',
    exercises: ['Squats', 'Lunges', 'Hip Thrusts'],
    exerciseDescription: {
      'Squats': 'Compound leg movement engaging glutes and quads.',
      'Lunges': 'Unilateral exercise emphasizing glute stability and balance.',
      'Hip Thrusts': 'Isolation movement focusing on glute contraction.'
    }
  },
  hamstrings: {
    description: 'Hamstrings control knee flexion and hip extension.',
    exercises: ['Romanian Deadlifts', 'Hamstring Curls', 'Nordic Hamstring Curls'],
    exerciseDescription: {
      'Romanian Deadlifts': 'Hip-hinge movement that emphasizes hamstring stretch.',
      'Hamstring Curls': 'Isolation machine exercise for hamstring contraction.',
      'Nordic Hamstring Curls': 'Advanced eccentric strength drill for hamstrings.'
    }
  },
  quads: {
    description: 'Quadriceps are the large muscles at the front of the thigh, responsible for knee extension and hip flexion.',
    exercises: ['Squats', 'Leg Press', 'Lunges'],
    exerciseDescription: {
      'Squats': 'A fundamental lower-body movement targeting the quads, glutes, and hamstrings.',
      'Leg Press': 'A machine-based movement to isolate and strengthen the quads.',
      'Lunges': 'A unilateral leg exercise that builds strength and balance in the quads and glutes.'
    }
  },
  calves: {
    description: 'Calf muscles enable plantar flexion and ankle stability.',
    exercises: ['Calf Raises', 'Seated Calf Raises', 'Jump Rope'],
    exerciseDescription: {
      'Calf Raises': 'Bodyweight or weighted exercise for the gastrocnemius.',
      'Seated Calf Raises': 'Targets the soleus muscle with knee flexion.',
      'Jump Rope': 'Dynamic calf endurance and plyometric drill.'
    }
  }
};

const MuscleDiagram: React.FC<{
  view: 'front' | 'back';
  selectedMuscle: string | null;
  onSelect: (muscle: string) => void;
}> = ({ view, selectedMuscle, onSelect }) => {
  const isBack = view === 'back';
  const isFront = view === 'front';

  return (
    <div className="bg-white ring-2 ring-black rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-200 p-4">
        <h2 className="text-lg font-bold capitalize">{view} View</h2>
      </div>
      <div className="p-4">
        <svg
          viewBox="0 0 432 648"
          className="w-full max-w-xs mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
        >
          <g id="Layer_1">
            <path
              d={isBack ? BackOutline : FrontOutline}
              className="fill-orange-100 stroke-black"
              strokeWidth={1}
              strokeMiterlimit={10}
            />
            <path
              d={isBack ? BackMuscles : FrontMuscles}
              className="fill-tan stroke-black"
              strokeWidth={1}
              strokeMiterlimit={10}
            />
          </g>

          {isBack && <LatsSVG selectedMuscle={selectedMuscle} onSelect={onSelect} />}
          {isBack && <Glutes selectedMuscle={selectedMuscle} onSelect={onSelect} />}
          {isBack && <Hamstrings selectedMuscle={selectedMuscle} onSelect={onSelect} />}
          {isBack && <Fascia selectedMuscle={selectedMuscle} onSelect={onSelect} />}
          {isBack && <Calves selectedMuscle={selectedMuscle} onSelect={onSelect} />}

          {isFront && <Chest selectedMuscle={selectedMuscle} onSelect={onSelect} />}
          {isFront && <Shoulders selectedMuscle={selectedMuscle} onSelect={onSelect} />}
          {isFront && <Abs selectedMuscle={selectedMuscle} onSelect={onSelect} />}
          {isFront && <Biceps selectedMuscle={selectedMuscle} onSelect={onSelect} />}
          {isFront && <Quads selectedMuscle={selectedMuscle} onSelect={onSelect} />}

        </svg>
      </div>
    </div>
  );
};


const ExerciseCard: React.FC<{ exercise: string, exerciseDescription: string }> = ({ exercise, exerciseDescription }) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <h4 className="text-md font-semibold">{exercise}</h4>
    <p>{exerciseDescription}</p>
  </div>
);

const MuscleInfo: React.FC<{ selectedMuscle: string | null }> = ({ selectedMuscle }) => {
  if (!selectedMuscle) {
    return (
      <div className="p-4 bg-white rounded-lg shadow h-full">
        <p className="text-gray-500">Select a muscle group to view details</p>
      </div>
    );
  }

  const { description, exercises, exerciseDescription } = muscleInfo[selectedMuscle];

  return (
    <div className="ring-2 ring-black p-4 bg-white rounded-lg shadow h-full">
      <h2 className="text-xl font-bold mb-2 capitalize">
      {selectedMuscle === 'fascia' ? 'Lower Back' : selectedMuscle.replace('-', ' ')}
    </h2>
      <div className="bg-gray-200 p-4 rounded-lg shadow mb-4">
        <h3 className='font-semibold mb-2'>About this muscle group</h3>
        <p className="mb-4">{description}</p>
      </div>
      <h3 className="text-lg font-semibold mb-2">Exercises</h3>
      <div className="space-y-2">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise}
            exercise={exercise}
            exerciseDescription={exerciseDescription[exercise]}
          />
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-stone-500 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Muscle Group Explorer</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <MuscleDiagram view="front" selectedMuscle={selectedMuscle} onSelect={setSelectedMuscle} />
        <MuscleDiagram view="back" selectedMuscle={selectedMuscle} onSelect={setSelectedMuscle} />
        <MuscleInfo selectedMuscle={selectedMuscle} />
      </div>
    </div>
  );
};

export default App;