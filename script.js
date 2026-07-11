const weeklyTemplates = [
  {
    name: "Week 1 — Dense Hypertrophy",
    note: "New compounds, strict tempo, and stronger mind-muscle connection.",
    days: [
      { slug: "monday", day: "Monday", title: "Push Day", focus: "Chest, shoulders, triceps", duration: "80-90 min", featuredLift: "High-Incline Machine Press", description: "A big upper-body day that blends chest strength with shoulder and triceps volume.", instructions: "Warm up for 10 minutes, then move the first two lifts with control and leave 1-2 reps in reserve.", exercises: [
        { name: "High-Incline Machine Press", sets: 4, reps: "6-8", weight: "Heavy", note: "Pause briefly at the bottom and press through the floor." },
        { name: "Dumbbell Floor Press", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Keep the elbows tucked and feel the triceps working." },
        { name: "Arnold Press", sets: 3, reps: "8-10", weight: "Moderate", note: "Rotate through the movement and stay stable." },
        { name: "Cable Lateral Raise", sets: 3, reps: "12-15", weight: "Light", note: "Use a controlled top squeeze and avoid shrugging." },
        { name: "Rope Pressdown", sets: 3, reps: "10-12", weight: "Moderate", note: "Keep the elbows pinned and stretch the triceps." }
      ] },
      { slug: "tuesday", day: "Tuesday", title: "Pull Day", focus: "Back, biceps, posture", duration: "80-85 min", featuredLift: "Neutral-Grip Pulldown", description: "A pull day centered on strong row mechanics and arm growth.", instructions: "Stay tall through the torso and keep each rep controlled from the start to the finish.", exercises: [
        { name: "Neutral-Grip Pulldown", sets: 4, reps: "6-8", weight: "Heavy", note: "Pull to the upper chest and fully squeeze the lats." },
        { name: "Chest-Supported Row", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Pause at the chest and avoid shrugging the shoulders." },
        { name: "Single-Arm Cable Row", sets: 3, reps: "10-12", weight: "Moderate", note: "Drive the elbow back and keep the torso still." },
        { name: "Face Pull", sets: 3, reps: "12-15", weight: "Light", note: "Lead with the elbows and feel the rear delts work." },
        { name: "Incline Dumbbell Curl", sets: 3, reps: "10-12", weight: "Moderate", note: "Lower slowly and squeeze hard at the top." }
      ] },
      { slug: "wednesday", day: "Wednesday", title: "Legs Day", focus: "Quads, hamstrings, glutes", duration: "85-90 min", featuredLift: "Hack Squat", description: "A lower-body day focused on tension, depth, and glute control.", instructions: "Keep the core tight, use a full range of motion, and keep the pace steady.", exercises: [
        { name: "Hack Squat", sets: 4, reps: "6-8", weight: "Heavy", note: "Drive through the whole foot and brace your torso." },
        { name: "Goblet Squat", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Sit back and stand tall with control." },
        { name: "Romanian Deadlift", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Keep the spine neutral and feel the hamstrings work." },
        { name: "Seated Leg Curl", sets: 3, reps: "10-12", weight: "Moderate", note: "Use a slow eccentric and squeeze at the bottom." },
        { name: "Standing Calf Raise", sets: 3, reps: "12-15", weight: "Moderate", note: "Pause at the top and use a full stretch." }
      ] },
      { slug: "thursday", day: "Thursday", title: "Chest Day", focus: "Chest volume and upper-body growth", duration: "75-80 min", featuredLift: "Incline Smith Press", description: "Chest-first volume that targets the upper pecs and adds a strong pressing pattern.", instructions: "Use a slow lowering phase and keep the shoulder blades stable.", exercises: [
        { name: "Incline Smith Press", sets: 4, reps: "6-8", weight: "Heavy", note: "Lower the bar to the upper chest and press with intent." },
        { name: "Cable Fly", sets: 3, reps: "10-12", weight: "Moderate", note: "Stretch the pecs and squeeze hard at the end." },
        { name: "Machine Dip", sets: 3, reps: "8-10", weight: "Moderate", note: "Use a full range and keep your body upright." },
        { name: "Push-Up", sets: 3, reps: "12-20", weight: "Bodyweight", note: "Lower slowly and feel the chest take the load." },
        { name: "Dumbbell Squeeze Press", sets: 2, reps: "10-12", weight: "Moderate", note: "Keep the dumbbells touching through the movement." }
      ] },
      { slug: "friday", day: "Friday", title: "Arms Day", focus: "Biceps and triceps isolation", duration: "70-75 min", featuredLift: "Close-Grip Bench", description: "An arm-focused day that gives the elbows and forearms plenty of work.", instructions: "Treat the first lift as the anchor, then stay strict on the isolation movements.", exercises: [
        { name: "Close-Grip Bench", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Keep the elbows tucked and move with control." },
        { name: "Cable Curl", sets: 3, reps: "10-12", weight: "Moderate", note: "Keep the elbows pinned and squeeze hard." },
        { name: "Overhead Triceps Extension", sets: 3, reps: "10-12", weight: "Moderate", note: "Use a slow lowering phase and hold briefly." },
        { name: "Preacher Curl", sets: 3, reps: "12-15", weight: "Moderate", note: "Stay strict and avoid momentum." },
        { name: "Rope Triceps Pushdown", sets: 2, reps: "12-15", weight: "Light", note: "Finish with complete extension and a squeeze." }
      ] },
      { slug: "saturday", day: "Saturday", title: "Athletic Day", focus: "Power, coordination, speed", duration: "70-75 min", featuredLift: "Medicine Ball Slam", description: "A sharp athletic day that adds power and reactivity without losing the gym feel.", instructions: "Explode through the movement but maintain clean mechanics and short rest periods.", exercises: [
        { name: "Medicine Ball Slam", sets: 4, reps: "8-10", weight: "Moderate", note: "Use full force and control the return." },
        { name: "Box Jump", sets: 3, reps: "5-6", weight: "Bodyweight", note: "Land softly and reset quickly." },
        { name: "Dumbbell Power Clean", sets: 3, reps: "6-8", weight: "Moderate", note: "Drive through the hips and keep the path smooth." },
        { name: "Agility Ladder Drill", sets: 3, reps: "8-10 each pattern", weight: "Bodyweight", note: "Stay quick and keep the feet light." },
        { name: "Sled Push", sets: 3, reps: "20-30 yards", weight: "Moderate", note: "Drive hard and control the slow down." }
      ] },
      { slug: "sunday", day: "Sunday", title: "Recovery Day", focus: "Mobility, breathing, easy movement", duration: "55-60 min", featuredLift: "Easy Walk", description: "A lighter day to let the body absorb the week and reset for the next cycle.", instructions: "Keep the effort relaxed, breathe deeply, and move with control.", exercises: [
        { name: "Easy Walk or Bike", sets: 1, reps: "20-30 min", weight: "Easy", note: "Keep the pace conversational and smooth." },
        { name: "Hip Mobility Flow", sets: 2, reps: "8-10 each side", weight: "Bodyweight", note: "Move slowly and breathe fully." },
        { name: "Breathing Drill", sets: 2, reps: "5-8 breaths", weight: "Bodyweight", note: "Relax into the stretch with long exhales." },
        { name: "Shoulder Mobility Circuit", sets: 2, reps: "10 each side", weight: "Bodyweight", note: "Keep the motion pain-free and smooth." }
      ] }
    ]
  },
  {
    name: "Week 2 — Strength Density",
    note: "A fresh set of lifts that shifts the tension and movement patterns.",
    days: [
      { slug: "monday", day: "Monday", title: "Push Day", focus: "Chest, shoulders, triceps", duration: "80-90 min", featuredLift: "Landmine Press", description: "A stronger pressing day with more upper-body power and controlled volume.", instructions: "Warm up thoroughly and make the first two movements the priority.", exercises: [
        { name: "Landmine Press", sets: 4, reps: "6-8", weight: "Heavy", note: "Drive the bar through a strong path and keep the torso steady." },
        { name: "Incline Dumbbell Press", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Feel the upper chest and avoid flaring the elbows too much." },
        { name: "Rear Delt Fly", sets: 3, reps: "10-12", weight: "Moderate", note: "Squeeze the back of the shoulders and keep a slight bend in the elbows." },
        { name: "Seated Dumbbell Lateral Raise", sets: 3, reps: "12-15", weight: "Light", note: "Work the delts without leaning into the movement." },
        { name: "Cable Overhead Triceps Extension", sets: 3, reps: "10-12", weight: "Moderate", note: "Keep the upper arms fixed and extend fully." }
      ] },
      { slug: "tuesday", day: "Tuesday", title: "Pull Day", focus: "Back, biceps, posture", duration: "80-85 min", featuredLift: "Machine Row", description: "A back-growth day with more upper-back tension and arm work.", instructions: "Stay tight through the torso and avoid sweeping the weight.", exercises: [
        { name: "Machine Row", sets: 4, reps: "6-8", weight: "Heavy", note: "Pull the handles to the ribcage and control the return." },
        { name: "Wide-Grip Lat Pulldown", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Use a controlled arc and keep the shoulder blades set." },
        { name: "Straight-Bar Curl", sets: 3, reps: "8-10", weight: "Moderate", note: "Curl with your elbows still and keep the wrists firm." },
        { name: "Reverse Pec Deck", sets: 3, reps: "12-15", weight: "Light", note: "Open the chest and train the rear delt chain." },
        { name: "Hammer Curl", sets: 2, reps: "12-15", weight: "Light", note: "Use a slow eccentric and keep the biceps active." }
      ] },
      { slug: "wednesday", day: "Wednesday", title: "Legs Day", focus: "Quads, hamstrings, glutes", duration: "85-90 min", featuredLift: "Barbell Front Squat", description: "A leg day built around quad strength, hip control, and growth.", instructions: "Brace hard, keep the torso upright, and move through a strong depth.", exercises: [
        { name: "Barbell Front Squat", sets: 4, reps: "6-8", weight: "Heavy", note: "Keep the elbows high and sit through the legs." },
        { name: "Bulgarian Split Squat", sets: 3, reps: "8-10 each leg", weight: "Moderate-heavy", note: "Stay tall and feel the glutes working." },
        { name: "Hip Thrust", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Drive through the heels and squeeze the glutes at the top." },
        { name: "Lying Leg Curl", sets: 3, reps: "10-12", weight: "Moderate", note: "Use a slow negative and squeeze hard." },
        { name: "Donkey Calf Raise", sets: 3, reps: "12-15", weight: "Moderate", note: "Pause at the top and use a full stretch." }
      ] },
      { slug: "thursday", day: "Thursday", title: "Chest Day", focus: "Chest volume and upper-body growth", duration: "75-80 min", featuredLift: "Incline Cable Press", description: "A chest-focused day built around line tension and a full stretch.", instructions: "Keep the chest proud and use a slow lower every rep.", exercises: [
        { name: "Incline Cable Press", sets: 4, reps: "8-10", weight: "Moderate-heavy", note: "Keep the cable path smooth and the pecs loaded." },
        { name: "Dumbbell Fly", sets: 3, reps: "10-12", weight: "Moderate", note: "Use a slight bend in the elbows and stretch strongly." },
        { name: "Low Cable Crossover", sets: 3, reps: "12-15", weight: "Moderate", note: "Drive the handles together and keep the ribcage down." },
        { name: "Diamond Push-Up", sets: 3, reps: "10-15", weight: "Bodyweight", note: "Lower under control and hold the bottom briefly." },
        { name: "Hex Dumbbell Floor Press", sets: 2, reps: "10-12", weight: "Moderate", note: "Keep the elbows tucked and squeeze the chest hard." }
      ] },
      { slug: "friday", day: "Friday", title: "Arms Day", focus: "Biceps and triceps isolation", duration: "70-75 min", featuredLift: "Weighted Dip", description: "An arm-focused day with more elbow-friendly work and strong contraction.", instructions: "Stay strict through isolation and do not rush the lowering phase.", exercises: [
        { name: "Weighted Dip", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Use a full range and control the descent." },
        { name: "EZ-Bar Curl", sets: 3, reps: "8-10", weight: "Moderate", note: "Keep the wrists relaxed and curl with intent." },
        { name: "Single-Arm Cable Extension", sets: 3, reps: "10-12", weight: "Moderate", note: "Use a long stretch and full extension." },
        { name: "Concentration Curl", sets: 3, reps: "12-15", weight: "Light", note: "Stay strict and squeeze the biceps hard." },
        { name: "Bench Triceps Extension", sets: 2, reps: "12-15", weight: "Light", note: "Lower slow and finish with full lockout." }
      ] },
      { slug: "saturday", day: "Saturday", title: "Athletic Day", focus: "Power, coordination, speed", duration: "70-75 min", featuredLift: "Kettlebell Swing", description: "An explosive, athletic day that still feels like a real training session.", instructions: "Move fast, stay smooth, and keep the core braced.", exercises: [
        { name: "Kettlebell Swing", sets: 4, reps: "12-15", weight: "Moderate", note: "Drive the hips and keep the back neutral." },
        { name: "Plyo Step-Up", sets: 3, reps: "8-10 each leg", weight: "Bodyweight", note: "Use the whole foot and land quietly." },
        { name: "Dumbbell Snatch", sets: 3, reps: "6-8 each side", weight: "Moderate", note: "Explode through the hips and stay balanced." },
        { name: "Cone Shuffle", sets: 3, reps: "8-10 each side", weight: "Bodyweight", note: "Stay light on your feet and sharp with your cuts." },
        { name: "Battle Rope Wave", sets: 3, reps: "20-30 sec", weight: "Bodyweight", note: "Keep the rhythm smooth and intense." }
      ] },
      { slug: "sunday", day: "Sunday", title: "Recovery Day", focus: "Mobility, breathing, easy movement", duration: "55-60 min", featuredLift: "Easy Walk", description: "A recovery day that helps your body absorb and reset after hard sessions.", instructions: "Keep the pace easy and give the nervous system a chance to calm down.", exercises: [
        { name: "Easy Walk or Bike", sets: 1, reps: "20-30 min", weight: "Easy", note: "Relax and keep the movement smooth." },
        { name: "Couch Stretch", sets: 2, reps: "8-10 each side", weight: "Bodyweight", note: "Use long, slow breathing and stay comfortable." },
        { name: "Breathing Reset", sets: 2, reps: "5-8 breaths", weight: "Bodyweight", note: "Slow exhale and stay loose in the jaw and shoulders." },
        { name: "Thoracic Rotation", sets: 2, reps: "10 each side", weight: "Bodyweight", note: "Move gently and keep the hips stable." }
      ] }
    ]
  },
  {
    name: "Week 3 — Upper/Lower Density",
    note: "A new combination of movements to keep the whole body adapting.",
    days: [
      { slug: "monday", day: "Monday", title: "Push Day", focus: "Chest, shoulders, triceps", duration: "80-90 min", featuredLift: "Seated Machine Shoulder Press", description: "A pressing day focused on shoulder strength and upper-body growth.", instructions: "Warm up, lock in your posture, and take the first movement seriously.", exercises: [
        { name: "Seated Machine Shoulder Press", sets: 4, reps: "6-8", weight: "Heavy", note: "Press through the shoulders without leaning back." },
        { name: "Incline Push-Up", sets: 3, reps: "10-15", weight: "Bodyweight", note: "Use a full range and keep the elbows at a slight angle." },
        { name: "Cable Chest Fly", sets: 3, reps: "10-12", weight: "Moderate", note: "Keep the arms slightly bent and squeeze the pecs." },
        { name: "Dumbbell Lateral Raise", sets: 3, reps: "12-15", weight: "Light", note: "Use a smooth path and avoid momentum." },
        { name: "Bench Triceps Dips", sets: 3, reps: "8-10", weight: "Moderate", note: "Stay controlled and keep the elbows close." }
      ] },
      { slug: "tuesday", day: "Tuesday", title: "Pull Day", focus: "Back, biceps, posture", duration: "80-85 min", featuredLift: "Assisted Chin-Up", description: "A pull day for thicker lats and stronger elbows.", instructions: "Stay tight and pull with your elbows rather than yanking the weight.", exercises: [
        { name: "Assisted Chin-Up", sets: 4, reps: "6-8", weight: "Heavy", note: "Pull to the chest and pause before lowering." },
        { name: "Chest-Supported T-Bar Row", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Keep the torso stable and row to the body." },
        { name: "Straight-Arm Pulldown", sets: 3, reps: "10-12", weight: "Moderate", note: "Use the lats and avoid biceps takeover." },
        { name: "Rear Delt Cable Raise", sets: 3, reps: "12-15", weight: "Light", note: "Drive the elbows back and squeeze the upper back." },
        { name: "Preacher Hammer Curl", sets: 2, reps: "12-15", weight: "Light", note: "Keep the wrist neutral and finish strong." }
      ] },
      { slug: "wednesday", day: "Wednesday", title: "Legs Day", focus: "Quads, hamstrings, glutes", duration: "85-90 min", featuredLift: "Trap Bar Deadlift", description: "A fuller lower-body day built around force production and done with strong posture.", instructions: "Brace and move the weight with intent while keeping the core tight.", exercises: [
        { name: "Trap Bar Deadlift", sets: 4, reps: "4-6", weight: "Heavy", note: "Drive through the floor and stand tall at the top." },
        { name: "Leg Extension", sets: 3, reps: "10-12", weight: "Moderate", note: "Use a slow negative and a strong squeeze." },
        { name: "Step-Up", sets: 3, reps: "8-10 each leg", weight: "Moderate-heavy", note: "Drive through the front foot and keep balance." },
        { name: "Glute Bridge", sets: 3, reps: "10-12", weight: "Moderate", note: "Squeeze the glutes hard at the top." },
        { name: "Seated Calf Raise", sets: 3, reps: "12-15", weight: "Moderate", note: "Use a slow stretch and pause at the peak." }
      ] },
      { slug: "thursday", day: "Thursday", title: "Chest Day", focus: "Chest volume and upper-body growth", duration: "75-80 min", featuredLift: "Machine Chest Press", description: "Chest volume with strong shape and great tension at the top end.", instructions: "Use a steady tempo and keep the upper back pinned into the bench or pad.", exercises: [
        { name: "Machine Chest Press", sets: 4, reps: "8-10", weight: "Heavy", note: "Control the lowering phase and avoid bouncing." },
        { name: "Pec Deck", sets: 3, reps: "12-15", weight: "Moderate", note: "Squeeze strongly at the end and keep the elbows fixed." },
        { name: "Incline Dumbbell Fly", sets: 3, reps: "10-12", weight: "Moderate", note: "Stretch the chest and stay controlled." },
        { name: "Close-Grip Push-Up", sets: 3, reps: "10-15", weight: "Bodyweight", note: "Use a slow lower and keep the elbows tucked." },
        { name: "Dumbbell Pullover", sets: 2, reps: "10-12", weight: "Moderate", note: "Move smoothly and feel the lats and pecs work together." }
      ] },
      { slug: "friday", day: "Friday", title: "Arms Day", focus: "Biceps and triceps isolation", duration: "70-75 min", featuredLift: "Cable Curl", description: "A more arm-specific day with lots of direct loading.", instructions: "Use a strict rep style and stay in control the whole set.", exercises: [
        { name: "Cable Curl", sets: 3, reps: "10-12", weight: "Moderate", note: "Keep the elbows pinned and curl with intent." },
        { name: "Skull Crusher", sets: 3, reps: "10-12", weight: "Moderate", note: "Lower slowly and squeeze the triceps hard." },
        { name: "Reverse Curl", sets: 3, reps: "10-12", weight: "Moderate", note: "Keep your wrists strong and work the forearms." },
        { name: "Single-Arm Triceps Pushdown", sets: 3, reps: "12-15", weight: "Light", note: "Stretch and lock out each rep cleanly." },
        { name: "Incline Dumbbell Curl", sets: 2, reps: "12-15", weight: "Light", note: "Lower slowly and feel the long head of the biceps." }
      ] },
      { slug: "saturday", day: "Saturday", title: "Athletic Day", focus: "Power, coordination, speed", duration: "70-75 min", featuredLift: "Jump Squat", description: "An explosive day that brings more athletic ability and coordination.", instructions: "Move fast but stay controlled and keep the landing safe.", exercises: [
        { name: "Jump Squat", sets: 4, reps: "6-8", weight: "Bodyweight", note: "Explode up and land softly with control." },
        { name: "Kettlebell Goblet Squat", sets: 3, reps: "8-10", weight: "Moderate", note: "Stay tall and keep the weight close to your chest." },
        { name: "Lateral Bound", sets: 3, reps: "6-8 each side", weight: "Bodyweight", note: "Push off the outside foot and stay balanced." },
        { name: "Medicine Ball Rotational Toss", sets: 3, reps: "8-10 each side", weight: "Moderate", note: "Turn through the core and keep the movement crisp." },
        { name: "Farmer Carry", sets: 3, reps: "30-40 yards", weight: "Moderate", note: "Walk tall and keep the core braced." }
      ] },
      { slug: "sunday", day: "Sunday", title: "Recovery Day", focus: "Mobility, breathing, easy movement", duration: "55-60 min", featuredLift: "Easy Walk", description: "A recovery day that lets the body settle down and stay mobile.", instructions: "Take the pressure off and use the day to loosen up.", exercises: [
        { name: "Easy Walk or Bike", sets: 1, reps: "20-30 min", weight: "Easy", note: "Keep it easy and let the legs loosen." },
        { name: "Hip Flexor Stretch", sets: 2, reps: "8-10 each side", weight: "Bodyweight", note: "Use slow breathing and a gentle hold." },
        { name: "Breathing Recovery", sets: 2, reps: "5-8 breaths", weight: "Bodyweight", note: "Slow exhale and reset the nervous system." },
        { name: "Scapular Pull-Up", sets: 2, reps: "10-12", weight: "Bodyweight", note: "Move slowly and keep the shoulder blades working." }
      ] }
    ]
  },
  {
    name: "Week 4 — Power and Pump",
    note: "A fresh week that blends strength, pump work, and explosive movement.",
    days: [
      { slug: "monday", day: "Monday", title: "Push Day", focus: "Chest, shoulders, triceps", duration: "80-90 min", featuredLift: "Hammer Strength Press", description: "A press-dominant day meant to build size and upper-body power.", instructions: "Use strict reps and make the first movement your priority.", exercises: [
        { name: "Hammer Strength Press", sets: 4, reps: "6-8", weight: "Heavy", note: "Press with your feet planted and your chest up." },
        { name: "Incline Dumbbell Press", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Keep the wrists stacked over the elbows." },
        { name: "Machine Lateral Raise", sets: 3, reps: "12-15", weight: "Light", note: "Lead with the elbows and feel the side delts." },
        { name: "Cable Pushdown", sets: 3, reps: "10-12", weight: "Moderate", note: "Keep the upper arm fixed and squeeze hard." },
        { name: "Dumbbell Overhead Triceps Extension", sets: 2, reps: "12-15", weight: "Light", note: "Use a slow eccentric and stay stable." }
      ] },
      { slug: "tuesday", day: "Tuesday", title: "Pull Day", focus: "Back, biceps, posture", duration: "80-85 min", featuredLift: "Seated Cable Row", description: "A bigger pull day focusing on upper-back thickness and arm work.", instructions: "Stay in the groove, control the return, and keep the torso stable.", exercises: [
        { name: "Seated Cable Row", sets: 4, reps: "8-10", weight: "Heavy", note: "Pull to the lower ribs and squeeze the upper back." },
        { name: "One-Arm Dumbbell Row", sets: 3, reps: "8-10 each side", weight: "Moderate-heavy", note: "Keep the chest proud and row through the elbow." },
        { name: "Lat Pullover", sets: 3, reps: "10-12", weight: "Moderate", note: "Use a smooth path and feel the lats stretch." },
        { name: "Reverse Cable Curl", sets: 3, reps: "10-12", weight: "Moderate", note: "Keep the forearms strong and the elbows still." },
        { name: "EZ-Bar Curl", sets: 2, reps: "12-15", weight: "Light", note: "Use a slow lower and keep the movement smooth." }
      ] },
      { slug: "wednesday", day: "Wednesday", title: "Legs Day", focus: "Quads, hamstrings, glutes", duration: "85-90 min", featuredLift: "Leg Press", description: "A lower-body day that adds size and strength through a controlled tempo.", instructions: "Brace hard, keep the knees tracking, and finish the reps with good form.", exercises: [
        { name: "Leg Press", sets: 4, reps: "8-10", weight: "Heavy", note: "Drive through the feet and keep the core rigid." },
        { name: "Barbell Romanian Deadlift", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Keep the torso long and feel a hamstring stretch." },
        { name: "Walking Lunge", sets: 3, reps: "10-12 each leg", weight: "Moderate", note: "Stay balanced and control each step." },
        { name: "Seated Leg Curl", sets: 3, reps: "10-12", weight: "Moderate", note: "Squeeze at the bottom and take the slow path down." },
        { name: "Single-Leg Calf Raise", sets: 3, reps: "12-15 each leg", weight: "Moderate", note: "Pause at the top and use a full stretch." }
      ] },
      { slug: "thursday", day: "Thursday", title: "Chest Day", focus: "Chest volume and upper-body growth", duration: "75-80 min", featuredLift: "Incline Machine Press", description: "A chest-focused day with more upper-pec work and good tension through the full range.", instructions: "Keep the shoulder blades back and lower with control.", exercises: [
        { name: "Incline Machine Press", sets: 4, reps: "8-10", weight: "Heavy", note: "Pause briefly at the bottom and press with control." },
        { name: "Dumbbell Pullover", sets: 3, reps: "10-12", weight: "Moderate", note: "Feel the stretch across the lats and chest." },
        { name: "Hex Press", sets: 3, reps: "10-12", weight: "Moderate", note: "Drive the dumbbells together and keep the torso set." },
        { name: "Low Cable Fly", sets: 3, reps: "12-15", weight: "Moderate", note: "Stay controlled and get a strong squeeze at the bottom." },
        { name: "Push-Up Finisher", sets: 2, reps: "15-20", weight: "Bodyweight", note: "Use a slow lowering phase and keep the core braced." }
      ] },
      { slug: "friday", day: "Friday", title: "Arms Day", focus: "Biceps and triceps isolation", duration: "70-75 min", featuredLift: "Close-Grip Press", description: "An arm day designed to add both size and a strong pump.", instructions: "Stay strict, control the lowering, and keep the tension high.", exercises: [
        { name: "Close-Grip Press", sets: 3, reps: "8-10", weight: "Moderate-heavy", note: "Drive through the triceps and keep the elbows tucked." },
        { name: "Cable Hammer Curl", sets: 3, reps: "10-12", weight: "Moderate", note: "Keep the wrists neutral and feel the biceps work." },
        { name: "Rope Overhead Extension", sets: 3, reps: "10-12", weight: "Moderate", note: "Use a full stretch and lockout on every rep." },
        { name: "Spider Curl", sets: 3, reps: "12-15", weight: "Light", note: "Stay strict and squeeze at the end." },
        { name: "Triceps Kickback", sets: 2, reps: "12-15", weight: "Light", note: "Use a slow arc and control the move." }
      ] },
      { slug: "saturday", day: "Saturday", title: "Athletic Day", focus: "Power, coordination, speed", duration: "70-75 min", featuredLift: "Box Jump", description: "A power-based day that also helps you feel athletic and explosive.", instructions: "Move quickly without sacrificing form and land quietly.", exercises: [
        { name: "Box Jump", sets: 4, reps: "5-6", weight: "Bodyweight", note: "Jump with intent and land softly." },
        { name: "Dumbbell Thruster", sets: 3, reps: "8-10", weight: "Moderate", note: "Drive the weight up through the shoulders and hips." },
        { name: "Lateral Shuffle", sets: 3, reps: "8-10 each side", weight: "Bodyweight", note: "Stay swift and low with your center of gravity." },
        { name: "Medicine Ball Chest Pass", sets: 3, reps: "8-10", weight: "Moderate", note: "Use your whole body and keep the pass crisp." },
        { name: "Sled Drag", sets: 3, reps: "20-30 yards", weight: "Moderate", note: "Drive the body forward and keep the posture tall." }
      ] },
      { slug: "sunday", day: "Sunday", title: "Recovery Day", focus: "Mobility, breathing, easy movement", duration: "55-60 min", featuredLift: "Easy Walk", description: "A lighter day that helps the body absorb the week and stay mobile.", instructions: "Keep it easy and let muscle tension melt away.", exercises: [
        { name: "Easy Walk or Bike", sets: 1, reps: "20-30 min", weight: "Easy", note: "Keep the pace casual and slow." },
        { name: "90/90 Stretch", sets: 2, reps: "8-10 each side", weight: "Bodyweight", note: "Move slowly and stay comfortable." },
        { name: "Breath and Reset", sets: 2, reps: "5-8 breaths", weight: "Bodyweight", note: "Use long exhales and let the shoulders drop." },
        { name: "Wrist and Forearm Mobility", sets: 2, reps: "10 each side", weight: "Bodyweight", note: "Keep the motion smooth and pain-free." }
      ] }
    ]
  }
];

const baseballPowerAdditions = {
  push: [
    { name: "Band External Rotation", sets: 3, reps: "15-20", weight: "Light", note: "Builds shoulder stability for throwing and keeps the cuff strong." },
    { name: "Medicine Ball Chest Pass", sets: 3, reps: "8-10", weight: "Moderate", note: "Adds explosive upper-body power and force transfer." },
    { name: "Push-Up Hold", sets: 2, reps: "20-30 sec", weight: "Bodyweight", note: "Creates extra chest and shoulder endurance for repeated effort." }
  ],
  pull: [
    { name: "Face Pull Iso Hold", sets: 3, reps: "20-30 sec", weight: "Light", note: "Promotes upper-back health and better scapular control for throwing." },
    { name: "Band Straight-Arm Pulldown", sets: 3, reps: "12-15", weight: "Light", note: "Adds lat width without the elbow strain of heavy pulling." },
    { name: "Farmer Carry", sets: 3, reps: "30-40 yards", weight: "Moderate", note: "Builds grip, posture, and total-body rotational strength." }
  ],
  legs: [
    { name: "Jump Squat", sets: 3, reps: "6-8", weight: "Bodyweight", note: "Boosts lower-body explosiveness for sprinting and batting." },
    { name: "Lateral Lunge", sets: 3, reps: "10 each side", weight: "Moderate", note: "Improves hip mobility and single-leg power for baseball movement." },
    { name: "Banded Calf Raise", sets: 2, reps: "15-20", weight: "Light", note: "Supports ankle stiffness and lower-leg force production." }
  ],
  chest: [
    { name: "Incline Push-Up", sets: 3, reps: "10-15", weight: "Bodyweight", note: "Adds upper-pec endurance and shoulder-friendly pressing volume." },
    { name: "Band Chest Fly", sets: 3, reps: "12-15", weight: "Light", note: "Hones chest isolation without excessive joint stress." },
    { name: "Scapular Push-Up", sets: 2, reps: "12-15", weight: "Bodyweight", note: "Strengthens shoulder blade control for throwing mechanics." }
  ],
  arms: [
    { name: "Reverse Curl", sets: 3, reps: "10-12", weight: "Moderate", note: "Builds forearms and elbow tolerance for repeated swings and throws." },
    { name: "Band Triceps Pressdown", sets: 3, reps: "15-20", weight: "Light", note: "Adds arm endurance and helps lock out with force." },
    { name: "Wrist Roller Hold", sets: 2, reps: "20-30 sec", weight: "Bodyweight", note: "Supports wrist durability for batting and throwing." }
  ],
  athletic: [
    { name: "Rotational Medicine Ball Toss", sets: 3, reps: "8 each side", weight: "Moderate", note: "Targets baseball-specific rotational power and core transfer." },
    { name: "Hurdle Hop", sets: 3, reps: "6 each side", weight: "Bodyweight", note: "Improves reactive strength and lower-body coordination." },
    { name: "Copenhagen Plank", sets: 3, reps: "20-30 sec", weight: "Bodyweight", note: "Builds anti-rotation strength for powerful swings and throws." }
  ],
  recovery: [
    { name: "Thoracic Rotation Stretch", sets: 2, reps: "8 each side", weight: "Bodyweight", note: "Keeps the upper back mobile for better throwing posture." },
    { name: "Ankle Mobility Flow", sets: 2, reps: "8 each side", weight: "Bodyweight", note: "Supports lower-body stability and better movement quality." },
    { name: "Deep Breathing Reset", sets: 2, reps: "5-8 breaths", weight: "Bodyweight", note: "Helps recovery while keeping the body relaxed and athletic." }
  ]
};

const finisherSupersets = {
  push: {
    name: "Power Push Finisher",
    note: "One explosive movement followed by a shoulder-stability movement for upper-body power.",
    exercises: [
      { name: "Medicine Ball Slams", sets: 3, reps: "10", weight: "Moderate", note: "Explode through the torso and control the return." },
      { name: "Band External Rotation", sets: 3, reps: "15", weight: "Light", note: "Keeps the shoulder joint strong and stable." }
    ]
  },
  pull: {
    name: "Rotational Pull Finisher",
    note: "A strong pull followed by a grip-heavy hold to build posture and durable force.",
    exercises: [
      { name: "Cable Row + Hold", sets: 3, reps: "10", weight: "Moderate", note: "Rows hard and hold the squeeze at the end." },
      { name: "Farmer Carry", sets: 3, reps: "25 yards", weight: "Moderate", note: "Strengthens grip and trunk stability." }
    ]
  },
  legs: {
    name: "Explosive Leg Finisher",
    note: "Plyometric work paired with a controlled squat pattern to increase power.",
    exercises: [
      { name: "Jump Squat", sets: 3, reps: "8", weight: "Bodyweight", note: "Drive up fast and land quietly." },
      { name: "Split Squat Hold", sets: 3, reps: "20 sec each side", weight: "Bodyweight", note: "Promotes single-leg control and hip strength." }
    ]
  },
  chest: {
    name: "Throwing Power Finisher",
    note: "A chest-power movement paired with shoulder-control work for stronger mechanics.",
    exercises: [
      { name: "Medicine Ball Chest Pass", sets: 3, reps: "8", weight: "Moderate", note: "Drive through the chest and torso." },
      { name: "Scapular Push-Up", sets: 3, reps: "12", weight: "Bodyweight", note: "Keeps the shoulder blades strong and controlled." }
    ]
  },
  arms: {
    name: "Arm and Grip Finisher",
    note: "A high-rep arm movement followed by a grip-focused hold to support swings and throws.",
    exercises: [
      { name: "Hammer Curl", sets: 3, reps: "12", weight: "Moderate", note: "Use a slow lower and squeeze at the top." },
      { name: "Dead Hang", sets: 3, reps: "20-30 sec", weight: "Bodyweight", note: "Builds grip and shoulder tolerance." }
    ]
  },
  athletic: {
    name: "Baseball Power Finisher",
    note: "Rotational and reactive work to sharpen movement quality and throw power.",
    exercises: [
      { name: "Rotational Medicine Ball Toss", sets: 3, reps: "8 each side", weight: "Moderate", note: "Drive through the hips and rotate with force." },
      { name: "Broad Jump", sets: 3, reps: "4", weight: "Bodyweight", note: "Builds lower-body power and directional force." }
    ]
  },
  recovery: {
    name: "Mobility Power Reset",
    note: "A light reset that keeps the body athletic and moving well.",
    exercises: [
      { name: "Thoracic Rotation Flow", sets: 2, reps: "8 each side", weight: "Bodyweight", note: "Open the upper back and improve movement quality." },
      { name: "Ankle Rocker Drill", sets: 2, reps: "10 each side", weight: "Bodyweight", note: "Keeps the lower body mobile and stable." }
    ]
  }
};

function enrichTemplates() {
  weeklyTemplates.forEach((week) => {
    week.days.forEach((day) => {
      const baseType = day.title.toLowerCase().replace(/ day$/, "");
      const additions = baseballPowerAdditions[baseType] || [];
      const finisher = finisherSupersets[baseType];
      day.exercises = [...day.exercises, ...additions];
      if (finisher) {
        day.finisherSuperset = finisher;
      }
      day.baseballPowerNote = day.title.includes("Athletic")
        ? "Built for explosive rotational power, reaction speed, and athletic movement."
        : day.title.includes("Recovery")
          ? "A lighter day that still supports mobility, durability, and athletic recovery."
          : "Built for muscle growth, shoulder durability, and more explosive throwing power.";
    });
  });
}

enrichTemplates();

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getExerciseVideoUrl(exerciseName) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`how to do ${exerciseName}`)}`;
}

function getDayTypeFromTitle(title) {
  return title.toLowerCase().replace(/ day$/, "");
}

function getSwapExercise(type) {
  const replacements = {
    push: [
      { name: "Incline Push-Up", sets: 3, reps: "10-15", weight: "Bodyweight", note: "A shoulder-friendly substitute with strong chest tension." },
      { name: "Band Chest Press", sets: 3, reps: "12-15", weight: "Light", note: "Keeps the pressing pattern without irritating the joints." },
      { name: "Cable Floor Press", sets: 3, reps: "10-12", weight: "Moderate", note: "A clean alternative for chest and triceps work." }
    ],
    pull: [
      { name: "Chest-Supported Pullover", sets: 3, reps: "10-12", weight: "Moderate", note: "A smoother back-focused substitute when the usual pull feels rough." },
      { name: "Band Row", sets: 3, reps: "12-15", weight: "Light", note: "Keeps the upper back engaged without heavy loading." },
      { name: "Straight-Arm Cable Pulldown", sets: 3, reps: "10-12", weight: "Moderate", note: "A solid alternative if lat pulldown mechanics feel awkward." }
    ],
    legs: [
      { name: "Reverse Lunge", sets: 3, reps: "10 each leg", weight: "Moderate", note: "A versatile lower-body substitute with strong leg drive." },
      { name: "Step-Up", sets: 3, reps: "10 each leg", weight: "Moderate", note: "Keeps the leg work heavy without the same joint stress." },
      { name: "Hip Thrust", sets: 3, reps: "10-12", weight: "Moderate", note: "A strong posterior-chain substitute for the main lower-body movement." }
    ],
    chest: [
      { name: "Machine Chest Fly", sets: 3, reps: "10-12", weight: "Moderate", note: "A clean chest-focused alternative with less joint stress." },
      { name: "Dumbbell Pullover", sets: 3, reps: "10-12", weight: "Moderate", note: "Keeps the chest and lats working in a different pattern." },
      { name: "Cable Press", sets: 3, reps: "10-12", weight: "Moderate", note: "A stable substitute for pressing volume." }
    ],
    arms: [
      { name: "Preacher Hammer Curl", sets: 3, reps: "10-12", weight: "Moderate", note: "A strong biceps alternative that still builds arm size." },
      { name: "Single-Arm Triceps Extension", sets: 3, reps: "12-15", weight: "Light", note: "A practical triceps substitute when the main variation feels rough." },
      { name: "Cable Curl", sets: 3, reps: "12-15", weight: "Moderate", note: "A simple arm-focused swap that keeps the session productive." }
    ],
    athletic: [
      { name: "Lateral Bounds", sets: 3, reps: "6 each side", weight: "Bodyweight", note: "A reactive substitute for explosive lower-body work." },
      { name: "Kettlebell Deadlift", sets: 3, reps: "8-10", weight: "Moderate", note: "A strong power-focused substitute that builds force." },
      { name: "Medicine Ball Rotational Throw", sets: 3, reps: "8 each side", weight: "Moderate", note: "A baseball-specific alternative for rotational power." }
    ],
    recovery: [
      { name: "Glute Bridge Hold", sets: 2, reps: "20-30 sec", weight: "Bodyweight", note: "A gentle substitute when mobility work feels too light." },
      { name: "Cat-Cow Flow", sets: 2, reps: "8-10", weight: "Bodyweight", note: "A softer movement option for recovery and posture." },
      { name: "Standing Hip Flexor Stretch", sets: 2, reps: "8 each side", weight: "Bodyweight", note: "A simple mobility swap if the usual drill feels too demanding." }
    ]
  };

  const pool = replacements[type] || [];
  return pool[Math.floor(Math.random() * pool.length)] || { name: "Band Substitute", sets: 3, reps: "10-12", weight: "Light", note: "A comfortable alternative that keeps the session moving." };
}

function swapExercise(weekIndex, slug, exerciseIndex) {
  const week = weeklyTemplates[weekIndex];
  const day = week.days.find((entry) => entry.slug === slug);
  if (!day || !day.exercises[exerciseIndex]) return;

  const replacement = getSwapExercise(getDayTypeFromTitle(day.title));
  day.exercises[exerciseIndex] = {
    ...day.exercises[exerciseIndex],
    ...replacement,
    swapped: true,
    originalName: day.exercises[exerciseIndex].name
  };

  renderWorkoutDetail();
}

function getCurrentDayIndex() {
  const today = new Date().getDay();
  return today === 0 ? 6 : today - 1;
}

function getWeekIndex() {
  const start = new Date("2026-01-01T00:00:00");
  const today = new Date();
  const diffDays = Math.floor((today - start) / 86400000);
  return Math.floor(diffDays / 7) % weeklyTemplates.length;
}

function getWorkout(slug, weekIndex = getWeekIndex()) {
  const week = weeklyTemplates[weekIndex];
  const entry = week.days.find((item) => item.slug === slug);
  return {
    weekIndex,
    weekName: week.name,
    weekNote: week.note,
    ...entry
  };
}

function getCurrentWorkout() {
  const index = getCurrentDayIndex();
  const slug = weeklyTemplates[0].days[index].slug;
  return getWorkout(slug, getWeekIndex());
}

function renderOverview() {
  const rotationGrid = document.getElementById("rotation-grid");
  const todayWorkout = document.getElementById("today-workout");
  const weekBadge = document.getElementById("week-badge");
  const currentDayName = document.getElementById("current-day-name");
  const nextChangeName = document.getElementById("next-change-name");
  const weekSummary = document.getElementById("week-summary");

  if (!rotationGrid || !todayWorkout || !weekBadge || !currentDayName || !nextChangeName || !weekSummary) return;

  const weekIndex = getWeekIndex();
  const currentDayIndex = getCurrentDayIndex();
  const week = weeklyTemplates[weekIndex];
  const weekDays = week.days;
  const today = getWorkout(weekDays[currentDayIndex].slug, weekIndex);

  weekBadge.innerHTML = `<strong>${week.name}</strong><br />${week.note}`;
  currentDayName.textContent = today.day;
  nextChangeName.textContent = `Week ${weekIndex + 2 > weeklyTemplates.length ? 1 : weekIndex + 2}`;
  weekSummary.innerHTML = `
    <div class="week-summary-box">
      <strong>Program focus</strong>
      <span>${week.note}</span>
    </div>
    <div class="week-summary-box">
      <strong>Current week</strong>
      <span>${week.name}</span>
    </div>
  `;

  rotationGrid.innerHTML = weekDays
    .map((entry, index) => {
      const isToday = index === currentDayIndex;
      return `
        <article class="day-card ${isToday ? "today" : ""}">
          <div class="day">${entry.day}</div>
          <div class="workout">${entry.title}</div>
          <div class="meta">${entry.focus}</div>
          <div class="meta">${entry.duration}</div>
          <a class="link-btn" href="workout.html?week=${weekIndex}&day=${entry.slug}">Open full workout</a>
        </article>
      `;
    })
    .join("");

  todayWorkout.innerHTML = `
    <div class="workout-detail">
      <div class="featured-lift"><strong>Featured lift:</strong> ${today.featuredLift}</div>
      <h3>${today.title}</h3>
      <p>${today.description}</p>
      <p><strong>Focus:</strong> ${today.focus}</p>
      <p><strong>Baseball power:</strong> ${today.baseballPowerNote}</p>
      <p><strong>Session length:</strong> ${today.duration}</p>
      <a class="link-btn" href="workout.html?week=${weekIndex}&day=${today.slug}">Open today’s detailed routine</a>
    </div>
  `;
}

function renderWorkoutDetail() {
  const detailContainer = document.getElementById("workout-detail");
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const weekIndex = Number(params.get("week") ?? getWeekIndex());
  const slug = params.get("day") || weeklyTemplates[weekIndex].days[getCurrentDayIndex()].slug;
  const selection = getWorkout(slug, weekIndex);

  detailContainer.innerHTML = `
    <div class="detail-grid">
      <div class="featured-lift"><strong>Featured lift:</strong> ${selection.featuredLift}</div>
      <h1>${selection.title}</h1>
      <p class="detail-note">${selection.description}</p>
      <p><strong>Focus:</strong> ${selection.focus}</p>
      <p><strong>Baseball power:</strong> ${selection.baseballPowerNote}</p>
      <p><strong>Session length:</strong> ${selection.duration}</p>
      <p class="detail-note"><strong>How to run it:</strong> ${selection.instructions}</p>
      <ul class="exercise-list">
        ${selection.exercises
          .map(
            (exercise, index) => `
              <li class="exercise-item">
                <div class="exercise-header">
                  <a class="exercise-name-link" href="${getExerciseVideoUrl(exercise.name)}" target="_blank" rel="noopener noreferrer">${escapeHtml(exercise.name)}</a>
                  <div class="exercise-actions">
                    <a class="exercise-action video-link" href="${getExerciseVideoUrl(exercise.name)}" target="_blank" rel="noopener noreferrer">Video</a>
                    <button class="exercise-action swap-button" type="button" data-week-index="${weekIndex}" data-day-slug="${selection.slug}" data-exercise-index="${index}">Swap lift</button>
                  </div>
                </div>
                <div class="exercise-meta">${exercise.sets} sets × ${exercise.reps}</div>
                <div class="exercise-meta">Weight: ${escapeHtml(exercise.weight)}</div>
                <div class="exercise-meta">${escapeHtml(exercise.note)}</div>
              </li>
            `
          )
          .join("")}
      </ul>
      ${selection.finisherSuperset ? `
        <div class="featured-lift">
          <strong>Finisher superset:</strong> ${selection.finisherSuperset.name}<br />
          ${selection.finisherSuperset.note}
        </div>
        <ul class="exercise-list">
          ${selection.finisherSuperset.exercises
            .map(
              (exercise) => `
                <li class="exercise-item">
                  <strong>${exercise.name}</strong><br />
                  ${exercise.sets} sets × ${exercise.reps}<br />
                  Weight: ${exercise.weight}<br />
                  ${exercise.note}
                </li>
              `
            )
            .join("")}
        </ul>
      ` : ""}
      <a class="back-link" href="index.html">Back to weekly plan</a>
    </div>
  `;

  detailContainer.querySelectorAll(".swap-button").forEach((button) => {
    button.addEventListener("click", () => {
      swapExercise(Number(button.dataset.weekIndex), button.dataset.daySlug, Number(button.dataset.exerciseIndex));
    });
  });
}

if (document.getElementById("rotation-grid")) {
  renderOverview();
}

if (document.getElementById("workout-detail")) {
  renderWorkoutDetail();
}
