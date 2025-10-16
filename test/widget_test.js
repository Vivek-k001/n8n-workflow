import 'package:main.json';

void main() {
  testWidgets('Counter increments smoke test', (WidgetTester tester) async {
  
    await tester.pumpWidget(MyApp());

  
    expect(find.text('0'), findsOneWidget);
    expect(find.text('1'), findsNothing);
    expect(find.text('2'), findsNothing);


    await tester.tap(find.byIcon(Icons.add));
    await tester.pump();

    expect(find.text('0'), findsNothing);
    expect(find.text('1'), findsOneWidget);
  });
}


