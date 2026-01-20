from django.core.management.base import BaseCommand
from elections.models import Province, District, ElectoralArea

class Command(BaseCommand):
    help = 'Clear all addresses (provinces, districts, constituencies)'

    def handle(self, *args, **options):
        self.stdout.write(self.style.WARNING('Deleting all addresses...'))
        
        count_ea = ElectoralArea.objects.count()
        count_dist = District.objects.count()
        count_prov = Province.objects.count()
        
        ElectoralArea.objects.all().delete()
        District.objects.all().delete()
        Province.objects.all().delete()
        
        self.stdout.write(self.style.SUCCESS(f'✓ Deleted {count_ea} constituencies'))
        self.stdout.write(self.style.SUCCESS(f'✓ Deleted {count_dist} districts'))
        self.stdout.write(self.style.SUCCESS(f'✓ Deleted {count_prov} provinces'))
        self.stdout.write(self.style.SUCCESS('\n✓ All addresses cleared successfully!'))
