from django.core.management.base import BaseCommand
from elections.models import Province, District, ElectoralArea

class Command(BaseCommand):
    help = 'Populate database with all provinces, districts, and constituencies of Nepal'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Starting to populate Nepal geographic data...'))

        # Complete Nepal Provinces and Districts Data with ALL 165 Constituencies
        nepal_data = {
            'Koshi': [
                {'name': 'Taplejung', 'constituencies': ['Taplejung 1']},
                {'name': 'Panchthar', 'constituencies': ['Panchthar 1']},
                {'name': 'Ilam', 'constituencies': ['Ilam 1', 'Ilam 2']},
                {'name': 'Jhapa', 'constituencies': ['Jhapa 1', 'Jhapa 2', 'Jhapa 3', 'Jhapa 4', 'Jhapa 5']},
                {'name': 'Sankhuwasabha', 'constituencies': ['Sankhuwasabha 1']},
                {'name': 'Tehrathum', 'constituencies': ['Tehrathum 1']},
                {'name': 'Bhojpur', 'constituencies': ['Bhojpur 1']},
                {'name': 'Dhankuta', 'constituencies': ['Dhankuta 1']},
                {'name': 'Morang', 'constituencies': ['Morang 1', 'Morang 2', 'Morang 3', 'Morang 4', 'Morang 5', 'Morang 6']},
                {'name': 'Sunsari', 'constituencies': ['Sunsari 1', 'Sunsari 2', 'Sunsari 3', 'Sunsari 4']},
                {'name': 'Solukhumbu', 'constituencies': ['Solukhumbu 1']},
                {'name': 'Khotang', 'constituencies': ['Khotang 1']},
                {'name': 'Okhaldhunga', 'constituencies': ['Okhaldhunga 1']},
                {'name': 'Udayapur', 'constituencies': ['Udayapur 1', 'Udayapur 2']},
            ],
            'Madhesh': [
                {'name': 'Saptari', 'constituencies': ['Saptari 1', 'Saptari 2', 'Saptari 3', 'Saptari 4']},
                {'name': 'Siraha', 'constituencies': ['Siraha 1', 'Siraha 2', 'Siraha 3', 'Siraha 4']},
                {'name': 'Dhanusha', 'constituencies': ['Dhanusha 1', 'Dhanusha 2', 'Dhanusha 3', 'Dhanusha 4']},
                {'name': 'Mahottari', 'constituencies': ['Mahottari 1', 'Mahottari 2', 'Mahottari 3', 'Mahottari 4']},
                {'name': 'Sarlahi', 'constituencies': ['Sarlahi 1', 'Sarlahi 2', 'Sarlahi 3', 'Sarlahi 4']},
                {'name': 'Rautahat', 'constituencies': ['Rautahat 1', 'Rautahat 2', 'Rautahat 3', 'Rautahat 4']},
                {'name': 'Bara', 'constituencies': ['Bara 1', 'Bara 2', 'Bara 3', 'Bara 4']},
                {'name': 'Parsa', 'constituencies': ['Parsa 1', 'Parsa 2', 'Parsa 3', 'Parsa 4']},
            ],
            'Bagmati': [
                {'name': 'Dolakha', 'constituencies': ['Dolakha 1']},
                {'name': 'Ramechhap', 'constituencies': ['Ramechhap 1']},
                {'name': 'Sindhuli', 'constituencies': ['Sindhuli 1', 'Sindhuli 2']},
                {'name': 'Rasuwa', 'constituencies': ['Rasuwa 1']},
                {'name': 'Dhading', 'constituencies': ['Dhading 1', 'Dhading 2']},
                {'name': 'Nuwakot', 'constituencies': ['Nuwakot 1', 'Nuwakot 2']},
                {'name': 'Kathmandu', 'constituencies': ['Kathmandu 1', 'Kathmandu 2', 'Kathmandu 3', 'Kathmandu 4', 'Kathmandu 5', 'Kathmandu 6', 'Kathmandu 7', 'Kathmandu 8', 'Kathmandu 9', 'Kathmandu 10']},
                {'name': 'Bhaktapur', 'constituencies': ['Bhaktapur 1', 'Bhaktapur 2']},
                {'name': 'Lalitpur', 'constituencies': ['Lalitpur 1', 'Lalitpur 2', 'Lalitpur 3']},
                {'name': 'Kavrepalanchok', 'constituencies': ['Kavrepalanchok 1', 'Kavrepalanchok 2']},
                {'name': 'Sindhupalchok', 'constituencies': ['Sindhupalchok 1', 'Sindhupalchok 2']},
                {'name': 'Makwanpur', 'constituencies': ['Makwanpur 1', 'Makwanpur 2']},
                {'name': 'Chitwan', 'constituencies': ['Chitwan 1', 'Chitwan 2', 'Chitwan 3']},
            ],
            'Gandaki': [
                {'name': 'Gorkha', 'constituencies': ['Gorkha 1', 'Gorkha 2']},
                {'name': 'Manang', 'constituencies': ['Manang 1']},
                {'name': 'Lamjung', 'constituencies': ['Lamjung 1']},
                {'name': 'Kaski', 'constituencies': ['Kaski 1', 'Kaski 2', 'Kaski 3']},
                {'name': 'Tanahun', 'constituencies': ['Tanahun 1', 'Tanahun 2']},
                {'name': 'Syangja', 'constituencies': ['Syangja 1', 'Syangja 2']},
                {'name': 'Nawalparasi (Bardaghat Susta East)', 'constituencies': ['Nawalparasi (Bardaghat Susta East) 1', 'Nawalparasi (Bardaghat Susta East) 2']},
                {'name': 'Mustang', 'constituencies': ['Mustang 1']},
                {'name': 'Myagdi', 'constituencies': ['Myagdi 1']},
                {'name': 'Baglung', 'constituencies': ['Baglung 1', 'Baglung 2']},
                {'name': 'Parbat', 'constituencies': ['Parbat 1']},
            ],
            'Lumbini': [
                {'name': 'Gulmi', 'constituencies': ['Gulmi 1', 'Gulmi 2']},
                {'name': 'Palpa', 'constituencies': ['Palpa 1', 'Palpa 2']},
                {'name': 'Arghakhanchi', 'constituencies': ['Arghakhanchi 1']},
                {'name': 'Nawalparasi (Bardaghat Susta West)', 'constituencies': ['Nawalparasi (Bardaghat Susta West) 1', 'Nawalparasi (Bardaghat Susta West) 2']},
                {'name': 'Rupandehi', 'constituencies': ['Rupandehi 1', 'Rupandehi 2', 'Rupandehi 3', 'Rupandehi 4', 'Rupandehi 5']},
                {'name': 'Kapilvastu', 'constituencies': ['Kapilvastu 1', 'Kapilvastu 2', 'Kapilvastu 3']},
                {'name': 'Eastern Rukum', 'constituencies': ['Eastern Rukum 1']},
                {'name': 'Rolpa', 'constituencies': ['Rolpa 1']},
                {'name': 'Pyuthan', 'constituencies': ['Pyuthan 1']},
                {'name': 'Dang', 'constituencies': ['Dang 1', 'Dang 2', 'Dang 3']},
                {'name': 'Banke', 'constituencies': ['Banke 1', 'Banke 2', 'Banke 3']},
                {'name': 'Bardiya', 'constituencies': ['Bardiya 1', 'Bardiya 2']},
            ],
            'Karnali': [
                {'name': 'Salyan', 'constituencies': ['Salyan 1']},
                {'name': 'Dolpa', 'constituencies': ['Dolpa 1']},
                {'name': 'Mugu', 'constituencies': ['Mugu 1']},
                {'name': 'Jumla', 'constituencies': ['Jumla 1']},
                {'name': 'Kalikot', 'constituencies': ['Kalikot 1']},
                {'name': 'Humla', 'constituencies': ['Humla 1']},
                {'name': 'Jajarkot', 'constituencies': ['Jajarkot 1']},
                {'name': 'Dailekh', 'constituencies': ['Dailekh 1', 'Dailekh 2']},
                {'name': 'Surkhet', 'constituencies': ['Surkhet 1', 'Surkhet 2']},
                {'name': 'Western Rukum', 'constituencies': ['Western Rukum 1']},
            ],
            'Sudurpashchim': [
                {'name': 'Bajura', 'constituencies': ['Bajura 1']},
                {'name': 'Achham', 'constituencies': ['Achham 1', 'Achham 2']},
                {'name': 'Bajhang', 'constituencies': ['Bajhang 1']},
                {'name': 'Doti', 'constituencies': ['Doti 1']},
                {'name': 'Kailali', 'constituencies': ['Kailali 1', 'Kailali 2', 'Kailali 3', 'Kailali 4', 'Kailali 5']},
                {'name': 'Darchula', 'constituencies': ['Darchula 1']},
                {'name': 'Baitadi', 'constituencies': ['Baitadi 1']},
                {'name': 'Dadeldhura', 'constituencies': ['Dadeldhura 1']},
                {'name': 'Kanchanpur', 'constituencies': ['Kanchanpur 1', 'Kanchanpur 2', 'Kanchanpur 3']},
            ],
        }

        # Create provinces, districts, and constituencies
        for province_name, districts in nepal_data.items():
            # Create or get province
            province, created = Province.objects.get_or_create(name=province_name)
            if created:
                self.stdout.write(self.style.SUCCESS(f'✓ Created Province: {province_name}'))
            else:
                self.stdout.write(f'• Province already exists: {province_name}')

            # Create districts and constituencies
            for district_data in districts:
                district_name = district_data['name']
                constituencies = district_data['constituencies']

                # Create or get district
                district, d_created = District.objects.get_or_create(
                    name=district_name,
                    province=province
                )
                if d_created:
                    self.stdout.write(self.style.SUCCESS(f'  ✓ Created District: {district_name}'))
                else:
                    self.stdout.write(f'  • District already exists: {district_name}')

                # Create constituencies (ElectoralAreas)
                for constituency_name in constituencies:
                    electoral_area, ea_created = ElectoralArea.objects.get_or_create(
                        name=constituency_name,
                        province=province
                    )
                    if ea_created:
                        self.stdout.write(f'    ✓ Created Constituency: {constituency_name}')
                    else:
                        self.stdout.write(f'    • Constituency already exists: {constituency_name}')

        self.stdout.write(self.style.SUCCESS('\n✓ Successfully populated all Nepal geographic data!'))
        self.stdout.write(self.style.WARNING('\nSummary:'))
        self.stdout.write(f'  Provinces: {Province.objects.count()}')
        self.stdout.write(f'  Districts: {District.objects.count()}')
        self.stdout.write(f'  Constituencies: {ElectoralArea.objects.count()}')
