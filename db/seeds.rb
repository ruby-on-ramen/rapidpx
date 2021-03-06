# frozen_string_literal: true

users = [{ email: 'rubyonramen@gmail.com', password: 'SDlearn123' }]

patients = [
  {
    first_name: 'Stefani',
    last_name: 'Germanotta',
    middle_name: 'Joanne Angelina',
    preferred_name: 'Lady Gaga',
    dob: '1956-03-28',
    gender: 'Female',
    pronoun: 'She/Her',
    image:
      'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
    need_to_know: 'Bee Allergie',
    medications: [
      {
        medication_name: 'Pepto-Bismol',
        dose: '20ml',
        frequency: 'Every 2 hours',
        time: 'As needed',
        prescribed_by: 'Dr. Julio',
        tx: 'Constipation',
        route: 'By mouth',
      },
      {
        medication_name: 'Risperidone',
        dose: '2mg',
        frequency: 'Once a day',
        time: 'Noon',
        prescribed_by: 'Dr. Yomama',
        tx: 'Behavior problems',
        route: 'By mouth',
      },
      {
        medication_name: 'Quetiapine',
        dose: '5mg',
        frequency: 'Once a day',
        time: 'Before bedtime',
        prescribed_by: 'Dr. Julio',
        tx: 'Antipsychotic',
        route: 'By mouth',
      },
    ],
  },
  {
    first_name: 'Gerald',
    last_name: 'Ramos',
    middle_name: '',
    preferred_name: 'Gerry',
    dob: '1960-07-01',
    gender: 'Male',
    pronoun: 'He/Him',
    image:
      'https://images.unsplash.com/photo-1535643302794-19c3804b874b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2xkJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    need_to_know: 'Deaf, he screams a lot',
    medications: [
      {
        medication_name: 'Olanzapine',
        dose: '10mg',
        frequency: 'Once a day',
        time: 'Morning',
        prescribed_by: 'Dr. Glam',
        tx: 'Schizophrenia',
        route: 'Injection',
      },
      {
        medication_name: 'Metronidazole',
        dose: '60mg',
        frequency: 'Once a day',
        time: 'Before bed',
        prescribed_by: 'Dr. Who',
        tx: 'Antibiotic',
        route: 'Topical',
      },
      {
        medication_name: 'Lorazepam',
        dose: '0.5mg tab',
        frequency: 'Every 6 hours',
        time: 'As needed',
        prescribed_by: 'Dr. Tabata',
        tx: 'Anxiety',
        route: 'By mouth',
      },
      {
        medication_name: 'Zaditor Antihistamine',
        dose: '5ml',
        frequency: 'Once a day',
        time: 'Morning',
        prescribed_by: 'Dr. Glam',
        tx: 'Itching',
        route: 'Eye drop',
      },
    ],
  },
  {
    first_name: 'Dwayne',
    last_name: 'Johnson',
    middle_name: 'Douglas',
    preferred_name: 'The Rock',
    dob: '1952-05-02',
    gender: 'Male',
    pronoun: 'He/Him',
    image:
      'https://images.unsplash.com/photo-1535320485706-44d43b919500?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG9sZCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    need_to_know: 'Likes to show off',
    medications: [
      {
        medication_name: 'Loratadine',
        dose: '10mg tab',
        frequency: 'As needed',
        time: 'As needed',
        prescribed_by: 'Dr. Who',
        tx: 'Allergies',
        route: 'By mouth',
      },
      {
        medication_name: 'Acetaminophen',
        dose: '1200 mg tab',
        frequency: 'Once a day',
        time: 'evening',
        prescribed_by: 'Dr. Fox',
        tx: 'Pain reliever',
        route: 'By mouth',
      },
      {
        medication_name: 'Hydroxyzine',
        dose: '25mg tab',
        frequency: 'Twice a day',
        time: '8am and 8pm',
        prescribed_by: 'Dr. Yomama',
        tx: 'Itching',
        route: 'By mouth',
      },
    ],
  },
  {
    first_name: 'Cole',
    last_name: 'Sprouse',
    middle_name: 'Mitchell',
    preferred_name: 'Cody',
    dob: '1962-08-04',
    gender: 'Male',
    pronoun: 'He/Him',
    image:
      'https://images.unsplash.com/photo-1444069069008-83a57aac43ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG9sZCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    need_to_know: '',
    medications: [
      {
        medication_name: 'Citalopram',
        dose: '10mg tab',
        frequency: 'Once a day',
        time: 'morning',
        prescribed_by: 'Dr. Fox',
        tx: 'Treat depression',
        route: 'By mouth',
      },
      {
        medication_name: 'Zaditor Antihistamine',
        dose: '5ml',
        frequency: 'Once a day',
        time: 'morning',
        prescribed_by: 'Dr. Biber',
        tx: 'Itching',
        route: 'Eye drop',
      },
      {
        medication_name: 'Loratadine',
        dose: '10mg tab',
        frequency: 'As needed',
        time: 'As needed',
        prescribed_by: 'Dr. Who',
        tx: 'Allergies',
        route: 'By mouth',
      },
      {
        medication_name: 'Acetaminophen ',
        dose: '200 mg tab',
        frequency: 'Once a day',
        time: 'Evening',
        prescribed_by: 'Dr. Fox',
        tx: 'Pain reliever',
        route: 'By mouth',
      },
    ],
  },
  {
    first_name: 'Katheryn',
    last_name: 'Hudson',
    middle_name: 'Elizabeth',
    preferred_name: 'Katy',
    dob: '1954-10-25',
    gender: 'Female',
    pronoun: 'She/Her',
    image:
      'https://images.unsplash.com/photo-1526860918836-81de4cae5681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG9sZCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    need_to_know: '',
    medications: [
      {
        medication_name: 'Lorazepam',
        dose: '0.5mg tab',
        frequency: 'every 6 hours',
        time: 'As needed',
        prescribed_by: 'Dr. Tabata',
        tx: 'Anxiety',
        route: 'By mouth',
      },
      {
        medication_name: 'Hydroxyzine',
        dose: '25mg tab',
        frequency: 'Twice a day',
        time: '8am and 8pm',
        prescribed_by: 'Dr. Yomama',
        tx: 'Anxiety and tension',
        route: 'By mouth',
      },
      {
        medication_name: 'Citalorpram',
        dose: '10mg tab',
        frequency: 'Once a day',
        time: 'Morning',
        prescribed_by: 'Dr. Fox',
        tx: 'Depression',
        route: 'By mouth',
      },
    ],
  },
]

users.each do |user|
  User.create(email: user[:email], password: user[:password])
  puts "Creating user #{user}"
end

patients.each do |patient|
  Patient.create(
    first_name: patient[:first_name],
    last_name: patient[:last_name],
    middle_name: patient[:middle_name],
    preferred_name: patient[:preferred_name],
    dob: patient[:dob],
    gender: patient[:gender],
    pronoun: patient[:pronoun],
    image: patient[:image],
    need_to_know: patient[:need_to_know],
  )
  patient[:medications].each do |medication|
    Patient.last.medications.create(
      medication_name: medication[:medication_name],
      dose: medication[:dose],
      frequency: medication[:frequency],
      time: medication[:time],
      prescribed_by: medication[:prescribed_by],
      tx: medication[:tx],
      route: medication[:route],
    )
  end
  puts "Creating patient #{patient}"
end
